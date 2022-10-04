import { postTodayChall, postTodayStudy } from 'utils/challengeApis';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { updateUser } from 'feature/profile/user';
import { setIsSubmit } from 'feature/challenge/form';
const morningSubmit = async (dispatch: Dispatch<AnyAction>) => {
  // new Date().toLocaleString('ko-KR');
  const { data, status } = await postTodayChall({
    time: new Date().toLocaleString('ko-KR')
  });
  if (status < 300) {
    dispatch(updateUser(data.data));
    dispatch(setIsSubmit({ isSubmit: true }));
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
    dispatch(setIsSubmit({ isSubmit: true }));
  } else if (status === 401) {
    alert('일일 챌린지 등록에 실패했습니다');
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
    dispatch(setIsSubmit({ isSubmit: true }));
  } else if (status === 401) {
    alert('일일 챌린지 등록에 실패했습니다');
  } else if (status === 403) {
    alert('챌린지 등록은 하루에 한번만 가능합니다');
  } else {
    alert('챌린지 등록 중에 예상치 못한 에러가 발생했습니다');
  }
};
export { thanksSubmit, morningSubmit, studySubmit };
