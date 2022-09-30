import { instance } from './axiosInstance';
import { SignupData, LoginData, EditInfo } from 'types/user';
const postLogin = async (loginData: LoginData) =>
  await instance
    .post('/members/login', loginData)
    .then((data) => data)
    .catch((err) => err.response);
const postLogout = async () =>
  await instance
    .post('/members/logout', '')
    .then((data) => data)
    .catch((err) => err.response);
const postSignup = async (signupData: SignupData) =>
  await instance
    .post('/members/signup', signupData)
    .then((data) => data)
    .catch((err) => err.response);
const postFindpw = async (findPwData: LoginData) =>
  await instance
    .post('/members/recovery', findPwData)
    .then((data) => data)
    .catch((err) => err.response);
const patchEditInfo = async (editData: EditInfo) =>
  await instance
    .patch('/members', editData)
    .then((data) => data)
    .catch((err) => err.response);
const deleteUser = async () =>
  await instance
    .delete('/members')
    .then((data) => data)
    .catch((err) => err.response);
export {
  postLogin,
  postLogout,
  postSignup,
  postFindpw,
  patchEditInfo,
  deleteUser
};
