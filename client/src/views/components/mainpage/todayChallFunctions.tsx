import {
  postTodayMorning,
  postTodayStudy,
  postTodayThanks
} from 'utils/challengeApis';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { logoutUser, updateUser } from 'feature/profile/user';
import { setTodayOpen } from 'feature/challenge/form';
const morningSubmit = async (dispatch: Dispatch<AnyAction>) => {
  const { data, status } = await postTodayMorning({
    time: new Date().toLocaleTimeString('en-US')
  });
  if (status < 300) {
    dispatch(updateUser(data.data));
    dispatch(setTodayOpen(false));
  } else if (status === 401) {
    dispatch(setTodayOpen(false));
    dispatch(logoutUser());
  } else if (status === 403) {
    alert('챌린지 등록은 하루에 한번만 가능합니다');
  } else {
    alert('챌린지 등록 중에 예상치 못한 에러가 발생했습니다');
  }
};
const thanksSubmit = async (dispatch: Dispatch<AnyAction>, text: string) => {
  if (text === '') {
    alert('감사일기를 작성해주세요');
    return;
  }

  const { data, status } = await postTodayThanks({ text });
  if (status < 300) {
    dispatch(updateUser(data.data));
    dispatch(setTodayOpen(false));
  } else if (status === 401) {
    dispatch(setTodayOpen(false));
    dispatch(logoutUser());
  } else if (status === 403) {
    alert('챌린지 등록은 하루에 한번만 가능합니다');
  } else {
    alert('챌린지 등록 중에 예상치 못한 에러가 발생했습니다');
  }
};

const studySubmit = async (
  dispatch: Dispatch<AnyAction>,
  image: File | undefined,
  time: number
) => {
  if (image === undefined || time === 0) {
    alert('사진과 시간 기입은 필수입니다');
    return;
  }
  if (image.size > 1000000) {
    alert('1mb이하인 사진을 등록해주세요');
    return;
  }
  const form = new FormData();
  // form.append('multipartFile', JSON.parse(image));
  form.append('multipartFile', image);
  form.append(
    'request',
    new Blob([JSON.stringify({ time })], {
      type: 'application/json'
    })
  );

  const { data, status } = await postTodayStudy(form);
  if (status < 300) {
    dispatch(updateUser(data.data));
    dispatch(setTodayOpen(false));
  } else if (status === 401) {
    dispatch(setTodayOpen(false));
    dispatch(logoutUser());
  } else if (status === 403) {
    alert('챌린지 등록은 하루에 한번만 가능합니다');
  } else {
    alert('챌린지 등록 중에 예상치 못한 에러가 발생했습니다');
  }
};
const photoPreview = (file: File, setPicPreview: (state: string) => void) => {
  if (file.size > 1000000) {
    alert('사이즈가 너무 큽니다 1mb이하의 사진을 넣어주세요');
    return;
  }
  setPicPreview(URL.createObjectURL(file));
};
export { thanksSubmit, morningSubmit, studySubmit, photoPreview };
