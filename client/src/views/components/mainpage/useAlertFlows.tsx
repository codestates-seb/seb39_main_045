import { deleteLogout, deleteUser } from 'utils/memberApis';

const logout = async () => {
  const { status } = await deleteLogout();
  if (status < 300) {
  }
};
