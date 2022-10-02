import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoType {
  // [index: string]: string | number
  email: string | null
  usename: string
  status: string
  progress: number
  challengeType: string
  providerType: string
  now: number
  targetDate: number
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
  providerType: '',
  now: 0,
  targetDate: 0
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
      state.userInfo = { ...initialUser.userInfo, ...payload };
      state.loginStatus = true;
    },

    updateUser: (state, { payload }: PayloadAction<Partial<UserInfoType>>) => {
      state.userInfo = { ...state.userInfo, ...payload };
    },

    logoutUser: (state) => {
      state.userInfo = initialUser.userInfo;
      state.loginStatus = false;
    }
  }
});
export const { loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
