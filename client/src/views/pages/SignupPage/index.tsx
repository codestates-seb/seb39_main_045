import React from 'react';
import type { SignupForm } from 'feature/form';
import { AuthWrapper, AuthTitle, AuthForm, AuthLabel, AuthInput, AuthLoginBtn } from 'views/components/login/style';
import { Content } from 'views/components/UI/molecules/text.style';
import { Icon } from 'views/components/icons';
import { useNavigate } from 'react-router-dom';
import useSignupFlows from './useSignupFlows';
import useSelectorTyped from 'utils/useSelectorTyped';
import debouncingChanges from './debouncingChanges';
import useSignupPageMounted from './useSignupPageMounted';

const Signup = () => {
  useSignupPageMounted();
  const { isValidEmail, isValidPassword, isValidUserName, requestStatus, error }: Partial<SignupForm> = useSelectorTyped((state) => state.form.signup_form);
  const navigate = useNavigate();
  const { doSignup } = useSignupFlows();
  const { onChange } = debouncingChanges();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void doSignup();
  };

  return (
    <AuthWrapper>
      <AuthTitle>회원가입</AuthTitle>
      <AuthForm onSubmit={handleSignup}>
        <Content.Check role="button" onClick={() => navigate('/login')}>
          <Icon.LeftArrow />
          로그인
        </Content.Check>
        <AuthLabel htmlFor="email">이메일</AuthLabel>
        <AuthInput
          id="email"
          type="email"
          required
          onChange={onChange}
        />
        <Content.Check>
          {isValidEmail ? '' : '이메일 양식을 확인해주세요.'}
        </Content.Check>
        <AuthLabel htmlFor="username">닉네임</AuthLabel>
        <AuthInput
          id="username"
          type="text"
          required
          maxLength={8}
          onChange={onChange}
        />
        <Content.Check>
          {isValidUserName ? '' : '닉네임의 길이는 2자 이상 8자 이하입니다.'}
        </Content.Check>
        <AuthLabel htmlFor="password">비밀번호</AuthLabel>
        <AuthInput
          autoComplete="false"
          id="password"
          type="password"
          required
          maxLength={20}
          onChange={onChange}
        />
        <Content.Check>
          {isValidPassword ? '' : '비밀번호의 길이는 8자 이상 20자 이상입니다.'}
        </Content.Check>
        <Content.Error>
          {error === '' ? '' : `가입 실패 : ${error}`}
        </Content.Error>
        <Content.Status>
          {requestStatus === '' ? '' : requestStatus}
        </Content.Status>
        <AuthLoginBtn type="submit">
          가입하기
        </AuthLoginBtn>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Signup;
