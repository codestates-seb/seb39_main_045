import React from 'react';
import type { EditForm } from 'feature/form';
import { Title, Content } from 'views/components/UI/molecules/text.style';
import { AuthLabel, AuthInput } from 'views/components/login/style';
import AlertModal from 'views/components/mainpage/AlertModal';
import { Form, Btn, Exit } from './SettingsPage.style';
import { Layout } from 'views/components/UI/Layout.style';
import MyPageNav from 'views/components/common/MyPageNav';
import debouncingChanges from './debouncingChanges';
import useSelectorTyped from 'utils/useSelectorTyped';
import useSettingsFlows from './useSettingsFlows';
import useSettingsPageMounted from './useSettingsPageMounted';

const MypageSettings = () => {
  useSettingsPageMounted();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { username } = useSelectorTyped(state => state.user.userInfo);
  const { isValidUserName, isValidPrePassword, isValidNewPassword, requestStatus, error }: Partial<EditForm> = useSelectorTyped(state => state.form.edit_form);
  const { onChange } = debouncingChanges();
  const { doEditInfo } = useSettingsFlows();

  const handleEditInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void doEditInfo();
  };

  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>내 정보 수정</Title.Main>
      <Form onSubmit={handleEditInfo}>
        <Content.Check>
          📢 카카오/구글로 가입하신 회원은 현재 페이지에서 비밀번호 변경이 불가능합니다.
        </Content.Check>
        <AuthLabel htmlFor="username">닉네임</AuthLabel>
        <AuthInput
          id="username"
          type="text"
          onChange={onChange}
          maxLength={8}
          required
          defaultValue={username}
        />
        <Content.Check>
          {isValidUserName ? '' : '새 닉네임은 2자 이상 8자 이하로 작성해주세요.'}
        </Content.Check>
        <AuthLabel htmlFor="prePassword">기존 비밀번호</AuthLabel>
        <AuthInput
          autoComplete="false"
          id="prePassword"
          type="password"
          required
          maxLength={20}
          onChange={onChange}
        />
        <Content.Check >
          {isValidPrePassword ? '' : '필수 입력 항목입니다.'}
        </Content.Check>
        <AuthLabel htmlFor="newPassword">새 비밀번호</AuthLabel>
        <AuthInput
          autoComplete="false"
          id="newPassword"
          type="password"
          maxLength={20}
          onChange={onChange}
        />
        <Content.Check >
          {(isValidNewPassword ?? false) ? '' : '새 비밀번호는 8자 이상 20자 이하로 작성해주세요.'}
        </Content.Check>
        <Content.Error>
          {error === '' ? '' : `변경 실패 : ${error}`}
        </Content.Error>
        <Content.Status>
          {requestStatus === '' ? '' : requestStatus}
        </Content.Status>
        <Btn type="submit">
          변경하기
        </Btn>
      </Form>
      <Exit onClick={() => setIsModalOpen(!isModalOpen)}>선인장 키우기를 떠나실 건가요?</Exit>
      {isModalOpen
        ? <AlertModal setIsOpen={setIsModalOpen} status="resign" />
        : null
      }
    </Layout.PageContainer>
  );
};

export default MypageSettings;
