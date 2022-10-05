import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLoginFlows from './useLoginFlows';
import KakaoLogin from 'views/components/login/KakaoLogin';
import GoogleLogin from 'views/components/login/GoogleLogin';
import { Content } from 'views/components/UI/molecules/text.style';
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
import { useDispatch } from 'react-redux';
import { setPassword, setEmail } from '../../../feature/form';
import useSelectorTyped from 'utils/useSelectorTyped';
// 해보시고 알려주세용.

const Login = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const { doLogin } = useLoginFlows('/main');
  const { isValid, err } = useSelectorTyped((state) => state.form.login_form);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void doLogin();
  };

  return (
    <AuthWrapper>
      <AuthTitle>로그인</AuthTitle>
      <AuthForm onSubmit={onSubmit}>
        <AuthLabel htmlFor="id">이메일</AuthLabel>
        <AuthInput
          type="email"
          id="id"
          placeholder="example@example.com"
          required
          onChange={(e) => dispatch(setEmail({ email: e.target.value }))}
        />
        <HBindDiv>
          <AuthLabel htmlFor="password">비밀번호</AuthLabel>
          <span>
            <Link to={'/forgotpw'}>비밀번호 찾기</Link>
          </span>
        </HBindDiv>
        <VisibleBind>
          <InputVisisble
            type={!isVisible ? 'password' : 'text'}
            id="password"
            placeholder="8~20자"
            autoComplete="current-password"
            onChange={(e) =>
              dispatch(setPassword({ password: e.target.value }))
            }
            required
          />
          <span
            className="material-icons"
            onClick={() => setIsVisible(!isVisible)}
          >
            {!isVisible ? 'visibility_off' : 'visibility'}
          </span>
        </VisibleBind>
        {isValid || <Content.Error>{err} </Content.Error>}
        <AuthLoginBtn type="submit">로그인</AuthLoginBtn>
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
