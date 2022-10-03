import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoType {
  // [index: string]: string | number
  email: string | null
  username: string
  status: string
  progress: number
  challengeType: string | null
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
  username: '',
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

    updateUser: (state, { payload }: PayloadAction<string>) => {
      state.userInfo = { ...state.userInfo, username: payload };
    },

    logoutUser: (state) => {
      state.userInfo = initialUser.userInfo;
      state.loginStatus = false;
    }
  }
});
export const { loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
