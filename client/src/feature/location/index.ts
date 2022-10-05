import { createSlice } from '@reduxjs/toolkit';

interface InitialLocation {
  path: string
}

const initialLocation: InitialLocation = {
  path: window.location.pathname
};

const locaitionSlice = createSlice({
  name: 'location',
  initialState: initialLocation,
  reducers: {
    clickMain: (state) => {
      state.path = '/main';
    },
    clickUsers: (state) => {
      state.path = '/mypage';
    },
    redirectLogin: (state) => {
      state.path = '/login';
    }
  }
});

export const { clickMain, clickUsers, redirectLogin } = locaitionSlice.actions;
export default locaitionSlice.reducer;
