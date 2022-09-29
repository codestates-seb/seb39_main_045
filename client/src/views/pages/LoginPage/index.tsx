import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLoginFlows from './useLoginFlows';
import KakaoLogin from 'views/components/login/KakaoLogin';
import GoogleLogin from 'views/components/login/GoogleLogin';
import { LoginData } from 'types/user';

import {
  AuthWrapper,
  AuthTitle,
  AuthForm,
  AuthLabel,
  AuthInput,
  HBindDiv,
  VisibleBind,
  InputVisisble,
  AuthLoginBtn,
  SnsLogin,
  WayToSignup,
  AuthDefaultBtn
} from 'views/components/login/style';
import useLoginForm from './useLoginForm';
import { useSelector } from 'react-redux';
import { setPassword, setEmail } from '../../../feature/form';

// 해보시고 알려주세용.

const Login = () => {
  const navigate = useNavigate();
  const { email, password, isValid } = useSelector(
    (state) => state.form.login_form
  );
  // const { email, password, setEmail, setPassword, verified } = useLoginForm();
  const [isVisible, setIsVisible] = useState(false);
  const loginData: LoginData = {
    email,
    password
  };
  const test = useLoginFlows();
  const handleLogin = async () => {
    dispatch(doLogin());
    // e.preventDefault();
    // const status: number = await test(loginData);
    // if (status < 300) {
    //   navigate('/main');
    // } else {
    //   alert('이메일과 비밀번호가 일치하지 않습니다');
    // }
  };

  return (
    <AuthWrapper>
      <AuthTitle>로그인</AuthTitle>
      <AuthForm onSubmit={handleLogin}>
        <AuthLabel htmlFor="id">이메일</AuthLabel>
        <AuthInput
          type="email"
          id="id"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <HBindDiv>
          <AuthLabel htmlFor="password">비밀번호</AuthLabel>
          <span>
            <Link to={'/signup'}>비밀번호 찾기</Link>
          </span>
        </HBindDiv>
        <VisibleBind>
          <InputVisisble
            type={!isVisible ? 'password' : 'text'}
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="material-icons"
            onClick={() => setIsVisible(!isVisible)}
          >
            {!isVisible ? 'visibility_off' : 'visibility'}
          </span>
        </VisibleBind>
        <AuthLoginBtn disabled={!isValid}>로그인</AuthLoginBtn>
        <SnsLogin>
          <span>소셜계정 로그인</span>
          <GoogleLogin />
          <KakaoLogin />
        </SnsLogin>
      </AuthForm>
      <WayToSignup>
        <div>아직 회원이 아니신가요?</div>
        <Link to={'/signup'}>
          <AuthDefaultBtn>1초만에 가입하기</AuthDefaultBtn>
        </Link>
      </WayToSignup>
    </AuthWrapper>
  );
};

export default Login;
