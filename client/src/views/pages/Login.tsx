import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const AuthWrapper = styled.div`
  background-color: var(--intro-bg-green);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
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
    margin: 10px;
    font-size: 0.8rem;
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
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.current != null && password.current !== null) {
      // axios 자리~~~
      console.log(email.current.value, password.current.value);
    }
  };
  return (
    <AuthWrapper>
      <AuthTitle>로그인</AuthTitle>
      <AuthForm onSubmit={handleLogin}>
        <AuthLabel htmlFor="id">이메일</AuthLabel>
        <AuthInput type="email" id="id" ref={email} required />
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
          <div className="btns">
            <a href="">버튼1</a>
            <a href="">버튼2</a>
          </div>
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

export default Login;
