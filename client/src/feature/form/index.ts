import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface LoginForm {
  email: string
  password: string
  isValid: boolean
}

export interface SignupForm {
  email: string
  username: string
  password: string
  isValidEmail: boolean
  isValidPassword: boolean
  isValidUserName: boolean
  requestStatus: string
  error: string
}
export interface EditForm {
  username: string
  prePassword: string
  newPassword: string | null
  isValidUserName: boolean
  isValidPrePassword: boolean
  isValidNewPassword?: boolean
  requestStatus: string
  error: string
}

export interface ForgotPWForm {
  email: string
  username: string
  isValidEmail: boolean
  isValidUserName: boolean
  requestStatus: string
}
interface IForm {
  login_form: LoginForm
  signup_form: SignupForm
  edit_form: EditForm
  forgotPW_form: ForgotPWForm
}

const initialState: IForm = {
  login_form: {
    email: '',
    password: '',
    isValid: false
  },
  signup_form: {
    email: '',
    username: '',
    password: '',
    isValidEmail: false,
    isValidPassword: false,
    isValidUserName: false,
    requestStatus: '',
    error: ''
  },
  edit_form: {
    username: '',
    prePassword: '',
    newPassword: null,
    isValidPrePassword: false,
    isValidUserName: false,
    requestStatus: '',
    error: ''
  },
  forgotPW_form: {
    email: '',
    username: '',
    isValidEmail: false,
    isValidUserName: false,
    requestStatus: ''
  }
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setEmail: (
      state,
      { payload }: PayloadAction<Pick<LoginForm, 'email'>>
    ) => {
      state.login_form = { ...state.login_form, email: payload.email };
    },
    setPassword: (
      state,
      { payload }: PayloadAction<Pick<LoginForm, 'password'>>
    ) => {
      state.login_form = { ...state.login_form, password: payload.password };
    },
    setIsValid: (
      state,
      { payload }: PayloadAction<LoginForm>
    ) => {
      state.login_form = { ...state.login_form, isValid: payload.isValid };
    },
    setSignupEmail: (
      state,
      { payload }: PayloadAction<Pick<SignupForm, 'email'>>
    ) => {
      state.signup_form = { ...state.signup_form, email: payload.email };
    },
    setSignupUsername: (
      state,
      { payload }: PayloadAction<Pick<SignupForm, 'username'>>
    ) => {
      state.signup_form = { ...state.signup_form, username: payload.username };
    },
    setSignupPassword: (
      state,
      { payload }: PayloadAction<Pick<SignupForm, 'password'>>
    ) => {
      state.signup_form = { ...state.signup_form, password: payload.password };
    },
    setEditUsername: (
      state,
      { payload }: PayloadAction<Pick<EditForm, 'username'>>
    ) => {
      state.edit_form = { ...state.edit_form, username: payload.username };
    },
    setEditPrePW: (
      state,
      { payload }: PayloadAction<Pick<EditForm, 'prePassword'>>
    ) => {
      state.edit_form = { ...state.edit_form, prePassword: payload.prePassword };
    },
    setEditNewPW: (
      state,
      { payload }: PayloadAction<Pick<EditForm, 'newPassword'>>
    ) => {
      state.edit_form = { ...state.edit_form, newPassword: payload.newPassword };
    },
    setSignupEmailValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.signup_form.isValidEmail = payload;
    },
    setSignupPasswordValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.signup_form.isValidPassword = payload;
    },
    setSignupUsernameValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.signup_form.isValidUserName = payload;
    },
    setSignupError: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.signup_form.error = payload;
    },
    setSignupRequestStatus: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.signup_form.requestStatus = payload;
    },
    setEditUsernameValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.edit_form.isValidUserName = payload;
    },
    setEditPrePasswordValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.edit_form.isValidPrePassword = payload;
    },
    setEditNewPasswordValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.edit_form.isValidNewPassword = payload;
    },
    setEditRequestStatus: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.edit_form.requestStatus = payload;
    },
    setEditError: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.edit_form.error = payload;
    },
    setForgotPWEmail: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.forgotPW_form.email = payload;
    },
    setForgotPWUsername: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.forgotPW_form.username = payload;
    },
    setForgotPWEmailValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.forgotPW_form.isValidEmail = payload;
    },
    setForgotPWUsernameValidity: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.forgotPW_form.isValidUserName = payload;
    },
    setForgotPWRequsetStatus: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.forgotPW_form.requestStatus = payload;
    }
  }
});
export const {
  setEmail,
  setPassword,
  setIsValid,
  setSignupEmail,
  setSignupUsername,
  setSignupPassword,
  setEditUsername,
  setEditPrePW,
  setEditNewPW,
  setSignupEmailValidity,
  setSignupPasswordValidity,
  setSignupUsernameValidity,
  setSignupRequestStatus,
  setSignupError,
  setEditUsernameValidity,
  setEditPrePasswordValidity,
  setEditNewPasswordValidity,
  setEditRequestStatus,
  setEditError,
  setForgotPWEmail,
  setForgotPWUsername,
  setForgotPWEmailValidity,
  setForgotPWUsernameValidity,
  setForgotPWRequsetStatus
} = formSlice.actions;
export default formSlice.reducer;
