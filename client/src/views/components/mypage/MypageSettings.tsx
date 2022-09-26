import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from './mypageStyle';
import { AuthLabel } from 'views/pages/Login';
import { NoticeBox, ErrorMessage } from 'views/pages/Signup';
import AlertModal from '../mainpage/AlertModal';
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
    <>
    <Title>내 정보 수정</Title>
    <Form onSubmit={handleSubmitInfo}>
      <AuthLabel htmlFor="username">닉네임</AuthLabel>
      <Input
        id="username"
        type="text"
        onChange={onChangeInput}
        maxLength={8}
      />
      {isCheckedName
        ? null
        : <NoticeBox as="div" fontSize='0.9rem'>
          닉네임은 2자 이상 8자 이하로 작성해주세요.
          </NoticeBox>
      }
      <AuthLabel htmlFor="prePassword">기존 비밀번호</AuthLabel>
      <Input
        autoComplete="false"
        id="prePassword"
        type="password"
        required
        maxLength={20}
        onChange={onChangeInput}
      />
      {isCheckedPrePw
        ? null
        : <NoticeBox as="div" fontSize='0.9rem'>
          비밀번호는 8자 이상 20자 이하로 작성해주세요.
          </NoticeBox>
      }
      <AuthLabel htmlFor="newPassword">새 비밀번호</AuthLabel>
      <Input
        autoComplete="false"
        id="newPassword"
        type="password"
        maxLength={20}
        onChange={onChangeInput}
      />
      {isCheckedNewPw
        ? null
        : <NoticeBox as="div" fontSize='0.9rem'>
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
    </>
  );
};

const Form = styled.form`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: var(--mypage-btn-beige);
  margin: 25px 0;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: 1px solid var(--shadow-beige-03);
`;

const Input = styled.input`
  margin-bottom: 10px;
  height: 2.5rem;
  border-radius: 5px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--shadow-beige-02);
  &:focus {
    outline: none;
    border: 1px solid var(--shadow-beige-03);
    background-color: var(--shadow-beige-03);
  }
`;

const Btn = styled.button`
  width: fit-content;
  align-self: center;
  margin: 30px 0 15px 0;
  font-size: 1rem;
  padding: 13px;
  border-radius: 15px;
  background-color: var(--intro-btn-yellow);
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 10px rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: var(--graph-bg-green);
  }
`;

const Exit = styled.button`
  background: none;
  font-size: 1rem;
  width: fit-content;
  align-self: flex-end;
`;

export default MypageSettings;
