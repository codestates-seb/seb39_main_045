import { ForgotPWForm } from 'feature/form';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSelectorTyped from 'utils/useSelectorTyped';
import { Icon } from 'views/components/icons';
import {
  AuthWrapper,
  AuthTitle,
  AuthForm,
  AuthLabel,
  AuthInput,
  AuthLoginBtn
} from 'views/components/login/style';
import { Content } from 'views/components/UI/molecules/text.style';
import handleDebouncedChange from './debouncedChanges';
import useForgotPasswordFlows from './useForgotPasswordFlows';

const ForgotPassword = () => {
  const {
    requestStatus,
    isValidEmail,
    isValidUserName
  }: Partial<ForgotPWForm> = useSelectorTyped(
    (state) => state.form.forgotPW_form
  );
  const navigate = useNavigate();
  const { onChange } = handleDebouncedChange();
  const { findForgotPW } = useForgotPasswordFlows();

  const handleFindPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void findForgotPW();
  };

  return (
    <AuthWrapper>
      <AuthTitle>비밀번호 찾기</AuthTitle>
      <AuthForm onSubmit={handleFindPassword}>
        <Content.Check role="button" onClick={() => navigate('/login')}>
          <Icon.LeftArrow />
          로그인
        </Content.Check>
        <AuthLabel htmlFor='email'>이메일</AuthLabel>
        <AuthInput id='email' onChange={onChange} />
        <Content.Check>
          {isValidEmail
            ? ''
            : '이메일 양식에 맞게 작성해주세요.'}
        </Content.Check>
        <AuthLabel htmlFor='username'>닉네임</AuthLabel>
        <AuthInput id='username' onChange={onChange} />
        <Content.Check>
          {isValidUserName
            ? ''
            : '닉네임의 길이는 2자 이상 8자 이하입니다.'}
        </Content.Check>
        <AuthLoginBtn type="submit">임시 비밀번호 발송</AuthLoginBtn>
        <Content.Error>
          {requestStatus}
        </Content.Error>
      </AuthForm>
    </AuthWrapper>
  );
};

export default ForgotPassword;
