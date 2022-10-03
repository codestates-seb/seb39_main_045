import { patchEditInfo } from 'utils/memberApis';
import useSelectorTyped from 'utils/useSelectorTyped';
import { setEditError, setEditNewPasswordValidity, setEditRequestStatus, setEditUsernameValidity } from 'feature/form';
import { updateUser } from 'feature/profile/user';
import { EditInfo } from 'types/userTypes';
import { useDispatch } from 'react-redux';

const useSettingsFlows = () => {
  const originName = useSelectorTyped(state => state.user.userInfo.username);
  const dispatch = useDispatch();
  const { username, prePassword, newPassword, isValidUserName, isValidPrePassword, isValidNewPassword } = useSelectorTyped((state) => state.form.edit_form);

  if (username.length === 0) {
    dispatch(setEditUsernameValidity(true));
  }
  if (newPassword?.length === 0) {
    dispatch(setEditNewPasswordValidity(true));
  }

  const inputData: EditInfo = { prePassword };
  if (username !== originName && username.length > 0) {
    inputData.username = username;
  }
  if (newPassword !== null) {
    inputData.newPassword = newPassword;
  }

  const doEditInfo = async () => {
    dispatch(setEditRequestStatus('처리중입니다...'));
    if (!isValidPrePassword) {
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
    } else {
      const { data, status } = await patchEditInfo({ ...inputData });
      if (status < 300) {
        dispatch(setEditRequestStatus('변경되었습니다.'));
        dispatch(updateUser(data.username));
      } else {
        dispatch(setEditRequestStatus(''));
        dispatch(setEditError(data.message ?? data.fieldErrors[0].reason));
      }
    }
  };
  return { doEditInfo };
};

export default useSettingsFlows;
