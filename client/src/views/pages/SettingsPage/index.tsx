import React, { useState } from 'react';
import { Title } from 'views/components/UI/molecules/text.style';
import { AuthLabel, AuthInput } from 'views/components/login/style';
import { NoticeBox, ErrorMessage } from 'views/pages/SignupPage/signup.style';
import AlertModal from 'views/components/mainpage/AlertModal';
import { Form, Btn, Exit } from 'views/pages/Mypage/mypage.style';
import { Layout } from 'views/components/UI/Layout.style';
import MyPageNav from 'views/components/common/MyPageNav';
// import axios from 'axios';

interface UserInfoProps {
  username?: string
  prePassword: string
  newPassword?: string
}

const MypageSettings = () => {
  const [isCheckedName, setIsCheckedName] = useState(true);
  const [isCheckedPrePw, setIsCheckedPrePw] = useState(true);
  const [isCheckedNewPw, setIsCheckedNewPw] = useState(true);
  const [inputError, setInputError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoProps>({ prePassword: '' });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(false);
    if (e.currentTarget.id === 'username') {
      setIsCheckedName(false);
      if (e.currentTarget.value.length >= 2) {
        setIsCheckedName(true);
      }
    }
    if (e.currentTarget.id === 'prePassword') {
      setIsCheckedPrePw(false);
      if (e.currentTarget.value.length >= 8) {
        setIsCheckedPrePw(true);
      }
    }
    if (e.currentTarget.id === 'newPassword') {
      setIsCheckedNewPw(false);
      if (e.currentTarget.value.length >= 8) {
        setIsCheckedNewPw(true);
      }
    }
    setUserInfo({ ...userInfo, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmitInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCheckedName && isCheckedPrePw && isCheckedNewPw) {
      console.log(userInfo);
      // axios.patch('/members', userInfo, {
      //   headers: { accessToken }
      // })
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    } else {
      setInputError(true);
    }
  };

  return (
    <Layout.PageContainer>
      <MyPageNav />
    <Title.Main>내 정보 수정</Title.Main>
    <Form onSubmit={handleSubmitInfo}>
      <AuthLabel htmlFor="username">닉네임</AuthLabel>
      <AuthInput
        id="username"
        type="text"
        onChange={onChangeInput}
        maxLength={8}
      />
      {isCheckedName
        ? null
        : <NoticeBox as="div">
          닉네임은 2자 이상 8자 이하로 작성해주세요.
          </NoticeBox>
      }
      <AuthLabel htmlFor="prePassword">기존 비밀번호</AuthLabel>
      <AuthInput
        autoComplete="false"
        id="prePassword"
        type="password"
        required
        maxLength={20}
        onChange={onChangeInput}
      />
      {isCheckedPrePw
        ? null
        : <NoticeBox as="div">
          비밀번호는 8자 이상 20자 이하로 작성해주세요.
          </NoticeBox>
      }
      <AuthLabel htmlFor="newPassword">새 비밀번호</AuthLabel>
      <AuthInput
        autoComplete="false"
        id="newPassword"
        type="password"
        maxLength={20}
        onChange={onChangeInput}
      />
      {isCheckedNewPw
        ? null
        : <NoticeBox as="div">
          비밀번호는 8자 이상 20자 이하로 작성해주세요.
          </NoticeBox>
      }
      {inputError
        ? <ErrorMessage as="div">
          변경 실패 : 입력 정보를 확인해주세요.
          </ErrorMessage>
        : null
      }
      <Btn type="submit">
        변경하기
      </Btn>
    </Form>
    <Exit onClick={() => setIsModalOpen(!isModalOpen)}>선인장 키우기를 떠나실 건가요?</Exit>
    {isModalOpen
      ? <AlertModal setIsOpen={setIsModalOpen} status="resign"/>
      : null
    }
    </Layout.PageContainer>
  );
};

export default MypageSettings;
