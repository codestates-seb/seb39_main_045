import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginForm {
  email: string
  password: string
  isValid: boolean
}

interface IForm {
  login_form: LoginForm
}

const initialState: IForm = {
  login_form: {
    email: '',
    password: '',
    isValid: false
  }
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<LoginForm>) => {
      state.login_form = { ...state.login_form, email: payload.email };
    },
    setPassword: (state, { payload }: PayloadAction<LoginForm>) => {
      state.login_form = { ...state.login_form, password: payload.password };
    },
    setIsValid: (state, { payload }: PayloadAction<LoginForm>) => {
      state.login_form = { ...state.login_form, isValid: payload.isValid };
    }
  }
});
export const { setEmail, setPassword, setIsValid } = formSlice.actions;
export default formSlice.reducer;
