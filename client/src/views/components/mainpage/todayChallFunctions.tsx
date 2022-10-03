import { postTodayChall, postTodayStudy } from 'utils/challengeApis';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { updateUser } from 'feature/profile/user';
import { clearThanksText } from 'feature/challenge/form';
const morningSubmit = async (dispatch: Dispatch<AnyAction>) => {
  const { data, status } = await postTodayChall({ time: new Date() });
  if (status < 300) {
    console.log(data);
  } else if (status === 401) {
    alert('일일 챌린지 등록에 실패했습니다');
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

  const { data, status } = await postTodayChall({ text });
  if (status < 300) {
    console.log(data);
    dispatch(updateUser(data.data));
    dispatch(clearThanksText());
  } else if (status === 401) {
    alert('일일 챌린지 등록에 실패했습니다');
  } else if (status === 403) {
    alert('챌린지 등록은 하루에 한번만 가능합니다');
  } else {
    alert('챌린지 등록 중에 예상치 못한 에러가 발생했습니다');
  }
};
const studyPreview = (
  files: File,
  setPicPreview: (state: string) => void,
  setFile: (state: string | File) => void
) => {
  // dispatch: Dispatch<AnyAction>
  if (files.size > 1000000) {
    alert('사진 용량이 너무 큽니다');
    return;
  }
  // console.log(JSON.stringify(files));
  // dispatch(setStudyImage({image:files }));
  const reader = new FileReader();
  reader.readAsDataURL(files);
  reader.onload = () => {
    if (typeof reader.result === 'string') {
      setPicPreview(reader.result);
    }
  };
  setFile(files);
};
const studySubmit = async (
  dispatch: Dispatch<AnyAction>,
  image: File | string,
  time: number
) => {
  if (image === '' || time === 0) {
    alert('사진과 시간 기입은 필수입니다');
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
  } else if (status === 401) {
    alert('일일 챌린지 등록에 실패했습니다');
  } else if (status === 403) {
    alert('챌린지 등록은 하루에 한번만 가능합니다');
  } else {
    alert('챌린지 등록 중에 예상치 못한 에러가 발생했습니다');
  }
};
export { thanksSubmit, morningSubmit, studyPreview, studySubmit };
