import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoType {
  // [index: string]: string | number
  email: string | null
  usename: string
  status: string
  progress: number
  challengeType: string
  providerType: string
}

interface UserType {
  loginStatus: boolean
  userInfo: UserInfoType
}

const initialUserInfo: UserInfoType = {
  email: '',
  usename: '',
  status: '',
  progress: -365,
  challengeType: '',
  providerType: ''
};

const initialUser: UserType = {
  loginStatus: false,
  userInfo: initialUserInfo
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<UserInfoType>) => {
      state.userInfo = { ...initialUserInfo, ...payload };
      state.loginStatus = true;
    },
    logoutUser: () => {
      return initialUser;
    }
  }
});
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
