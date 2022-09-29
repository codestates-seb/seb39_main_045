import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthWrapper, AuthTitle, AuthForm, AuthLabel, AuthInput, AuthLoginBtn } from 'views/components/login/style';
import { ErrorMessage, NoticeBox } from './signup.style';
import LeftArrow from 'views/components/icons/auth/LeftArrow';
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
      <NoticeBox onClick={() => navigate('/login')}>
        <LeftArrow />
        로그인
      </NoticeBox>
      <AuthLabel htmlFor="email">이메일</AuthLabel>
      <AuthInput
        id="email"
        type="email"
        required
        onChange={onChangeInput}
      />
      <AuthLabel htmlFor="username">닉네임</AuthLabel>
      <AuthInput
        id="username"
        type="text"
        required
        onChange={onChangeInput}
        maxLength={8}
      />
      {isCheckedName
        ? null
        : <NoticeBox as="div">
          닉네임은 2자 이상 8자 이하로 작성해주세요.
          </NoticeBox>
      }
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
        : <NoticeBox as="div">
          비밀번호는 8자 이상 20자 이하로 작성해주세요.
          </NoticeBox>
      }
      {inputError
        ? <ErrorMessage as="div">
          가입 실패 : 입력 정보를 확인해주세요.
          </ErrorMessage>
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
