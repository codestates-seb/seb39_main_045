import { patchEditInfo } from 'utils/memberApis';
import type { EditForm } from 'feature/form';
import useSelectorTyped from 'utils/useSelectorTyped';
import { setEditError, setEditRequestStatus } from 'feature/form';
import { updateUser, logoutUser } from 'feature/profile/user';
import { EditInfo } from 'types/userTypes';
import { useDispatch } from 'react-redux';

const useSettingsFlows = () => {
  const dispatch = useDispatch();
  const {
    username,
    prePassword,
    newPassword,
    isValidUserName,
    isValidPrePassword,
    isValidNewPassword
  }: EditForm = useSelectorTyped((state) => state.form.edit_form);

  const inputData: EditInfo = { username };
  if (typeof prePassword === 'string' && prePassword.length > 0) {
    inputData.prePassword = prePassword;
  }
  if (typeof newPassword === 'string' && newPassword.length > 0) {
    inputData.newPassword = newPassword;
  }

  const doEditInfo = async () => {
    if (isValidPrePassword === false) {
      dispatch(setEditError('기존 비밀번호를 확인해주세요'));
      return false;
    }
    if (!isValidUserName) {
      dispatch(setEditError('닉네임 조건을 확인해주세요'));
      return false;
    }
    if (isValidNewPassword === false) {
      dispatch(setEditError('비밀번호 조건을 확인해주세요'));
      return false;
    }
    dispatch(setEditRequestStatus('처리중입니다...'));
    const { data, status } = await patchEditInfo({ ...inputData });
    if (status < 300) {
      dispatch(setEditRequestStatus('변경되었습니다.'));
      dispatch(updateUser({ username: data.data.username }));
    } else if (status === 401) {
      dispatch(logoutUser());
    } else {
      dispatch(setEditRequestStatus(''));
      dispatch(setEditError(data.message ?? data.fieldErrors[0].reason));
    }
  };
  return { doEditInfo };
};

export default useSettingsFlows;
