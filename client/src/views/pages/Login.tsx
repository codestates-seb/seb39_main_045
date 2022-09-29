import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'feature/profile/user';
import { instance } from 'utils/axiosInstance';
import KakaoLogin from 'views/components/login/KakaoLogin';
import google from '../../assets/img/btn_google_signin_light_normal_web.png';
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
interface LoginData {
  email: string | undefined
  password: string | undefined
}
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email !== '' || password !== '') {
      const loginData: LoginData = { email, password };
      instance
        .post('/api/v1/members/login', loginData, {
          withCredentials: true
        })
        .then(({ data }) => {
          dispatch(loginUser(data.data));
          navigate('/main');
        })
        .catch((err) => console.log(err));
    }
  };
  const handleGoogle = () => {
    window.location.href =
      'https://api.cactus-villeage.com/oauth2/authorization/google?redirect_uri=https://dev.cactus-villeage.com/main/';
  };
  return (
    <AuthWrapper>
      <AuthTitle>로그인</AuthTitle>
      <AuthForm onSubmit={handleLogin}>
        <AuthLabel htmlFor="id">이메일</AuthLabel>
        <AuthInput type="email" id="id" ref={emailRef} required />
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
            ref={passwordRef}
            required
          />
          <span
            className="material-icons"
            onClick={() => setIsVisible(!isVisible)}
          >
            {!isVisible ? 'visibility_off' : 'visibility'}
          </span>
        </VisibleBind>
        <AuthLoginBtn>로그인</AuthLoginBtn>
        <SnsLogin>
          <span>소셜계정 로그인</span>
          <img src={google} onClick={handleGoogle} alt="googleLogin" />
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
