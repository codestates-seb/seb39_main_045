import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import kakao from '../../assets/img/kakao_login_medium_narrow.png';
import google from '../../assets/img/btn_google_signin_light_normal_web.png';
interface LoginData {
  email: string | undefined
  password: string | undefined
}
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email !== '' || password !== '') {
      const loginData: LoginData = { email, password };
      axios
        .post('https://api.cactus-villeage.com/members/login', loginData, {
          withCredentials: true
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      // axios 자리~~~

      console.log(email, password);
    }
  };
  const handleKaKao = () => {
    console.log('여기');
  };
  const handleGoogle = () => {
    axios
      .get(
        'https://api.cactus-villeage.com/oauth2/authorization/google?redirect_uri=https://dev.cactus-villeage.com/main/',
        {
          withCredentials: true
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <AuthWrapper>
      <AuthTitle>로그인</AuthTitle>
      <AuthForm onSubmit={handleLogin}>
        <AuthLabel htmlFor="id">이메일</AuthLabel>
        <AuthInput type="email" id="id" ref={emailRef} required />
        <HBindDiv>
          <AuthLabel htmlFor="password">비밀번호</AuthLabel>
          <span className="findpw">
            <Link to={'/signup'}>비밀번호 찾기</Link>
          </span>
        </HBindDiv>
        <VisibleBind>
          <InputVisisble
            type={!isVisible ? 'password' : 'text'}
            id="password"
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
        <SnsLogin className="snsLogin">
          <span>소셜계정 로그인</span>
          <Link to="">
            <img
              src={google}
              className="google"
              onClick={handleGoogle}
              alt="googleLogin"
            />
          </Link>
          <img
            src={kakao}
            className="kakao"
            onClick={handleKaKao}
            alt="kakaoLogin"
          />
        </SnsLogin>
      </AuthForm>
      <WayToSignup>
        <div>아직 회원이 아니신가요?</div>
        <AuthDefaultBtn>
          <Link to={'/signup'}>1초만에 가입하기</Link>
        </AuthDefaultBtn>
      </WayToSignup>
    </AuthWrapper>
  );
};
export const AuthWrapper = styled.div`
  background-color: var(--intro-bg-green);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 70px;
`;
export const AuthTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 20px;
  margin-left: 5px;
`;
export const AuthForm = styled.form`
  width: 80%;
  background-color: var(--intro-form-beige);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 25%));
`;
export const AuthDefaultBtn = styled.button`
  padding: 15px 20px;
  margin-top: 20px;
  background-color: var(--intro-btn-yellow);
  border: none;
  border-radius: 16px;
  :hover {
    box-shadow: inset 0 0 30px #f8e647cc;
  }
  :active {
    box-shadow: inset 0 0 30px #f8e647cc;
  }
`;
export const AuthLoginBtn = styled(AuthDefaultBtn)`
  align-self: center;
`;
export const AuthLabel = styled.label`
  margin: 10px 0;
  font-weight: 700;
`;
export const AuthInput = styled.input`
  padding: 15px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus {
    outline: 2px solid #ffbe28;
    background-color: #fff5e6;
  }
`;

export const HBindDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .findpw {
    font-size: 0.75rem;
    color: var(--intro-form-darkgreen);
    font-weight: 400;
  }
`;
export const SnsLogin = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
    margin: 5px;
    font-size: 0.8rem;
  }
  .google {
    width: 188px;
    height: 48px;
    margin-bottom: 5px;
  }
  .kakao {
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
  }
`;
export const WayToSignup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-weight: 700;
    font-size: 14px;
  }
`;
const InputVisisble = styled(AuthInput)`
  width: 100%;
`;

const VisibleBind = styled.div`
  position: relative;
  .material-icons {
    position: absolute;
    right: 10px;
    top: calc(50% - 5px);
    transform: translateY(-50%);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
  }
`;
export default Login;
