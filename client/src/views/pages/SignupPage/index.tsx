import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthWrapper, AuthTitle, AuthForm, AuthLabel, AuthInput, AuthLoginBtn } from 'views/components/login/style';
import { Content } from 'views/components/UI/molecules/text.style';
import { Icon } from 'views/components/icons';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [isCheckedName, setIsCheckedName] = useState(true);
  const [isCheckedPw, setIsCheckedPw] = useState(true);
  const [inputError, setInputError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: ''
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(false);
    if (e.currentTarget.id === 'username') {
      setIsCheckedName(false);
      if (e.currentTarget.value.length >= 2) {
        setIsCheckedName(true);
      }
    }
    if (e.currentTarget.id === 'password') {
      setIsCheckedPw(false);
      if (e.currentTarget.value.length >= 8) {
        setIsCheckedPw(true);
      }
    }
    setUserInfo({ ...userInfo, [e.currentTarget.id]: e.currentTarget.value });
  };

  const onSubmitSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCheckedName && isCheckedPw) {
      // 회원가입에 성공했습니다 모달
      axios.post('https://api.cactus-villeage.com/api/v1/members/signup', userInfo)
        .then(() => navigate('/login'))
        .catch(err => console.log(err));
    } else {
      setInputError(true);
    }
  };

  return (
  <AuthWrapper>
    <AuthTitle>회원가입</AuthTitle>
    <AuthForm onSubmit={onSubmitSignUp}>
      <Content.Check onClick={() => navigate('/login')}>
        <Icon.LeftArrow />
        로그인
      </Content.Check>
      <AuthLabel htmlFor="email">이메일</AuthLabel>
      <AuthInput
        id="email"
        type="email"
        required
        onChange={onChangeInput}
      />
      <AuthLabel htmlFor="password">비밀번호</AuthLabel>
      <AuthInput
        autoComplete="false"
        id="password"
        type="password"
        required
        maxLength={20}
        onChange={onChangeInput}
      />
      {isCheckedPw
        ? null
        : <Content.Check>
          비밀번호는 8자 이상 20자 이하로 작성해주세요.
          </Content.Check>
      }
      {inputError
        ? <Content.Error>
          가입 실패 : 입력 정보를 확인해주세요.
          </Content.Error>
        : null
      }
      <AuthLoginBtn type="submit">
        가입하기
      </AuthLoginBtn>
    </AuthForm>
  </AuthWrapper>
  );
};

export default Signup;
