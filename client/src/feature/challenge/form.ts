import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Challenge {
  challengeType: string
  targetDate: number
  targetTime: number
  isValid: boolean
}
interface Submit {
  isOpen: boolean
}
interface Alert {
  isOpen: boolean
  status: string
}

interface ChallengeForm {
  challenge_form: Challenge
  form_today_submit: Submit
  alert_modal: Alert
}

const initialChallenge = {
  challengeType: 'none',
  targetDate: 0,
  targetTime: 0,
  isValid: false
};

const initialTodayOpen: Submit = {
  isOpen: false
};
const initialAlertOpen: Alert = {
  isOpen: false,
  status: 'none'
};
const initialState: ChallengeForm = {
  challenge_form: initialChallenge,
  form_today_submit: initialTodayOpen,
  alert_modal: initialAlertOpen
};
export const challFormSlice = createSlice({
  name: 'chall',
  initialState,
  reducers: {
    setChall: (
      state,
      { payload }: PayloadAction<Pick<Challenge, 'challengeType'>>
    ) => {
      state.challenge_form = {
        ...state.challenge_form,
        challengeType: payload.challengeType
      };
    },
    setDate: (
      state,
      { payload }: PayloadAction<Pick<Challenge, 'targetDate'>>
    ) => {
      state.challenge_form = {
        ...state.challenge_form,
        targetDate: payload.targetDate
      };
    },
    setTime: (
      state,
      { payload }: PayloadAction<Pick<Challenge, 'targetTime'>>
    ) => {
      state.challenge_form = {
        ...state.challenge_form,
        targetTime: payload.targetTime
      };
    },
    setIsValid: (
      state,
      { payload }: PayloadAction<Pick<Challenge, 'isValid'>>
    ) => {
      state.challenge_form = {
        ...state.challenge_form,
        isValid: payload.isValid
      };
    },
    clearChooseForm: (state) => {
      state.challenge_form = initialChallenge;
    },
    setAlertOpen: (state, { payload }: PayloadAction<Alert>) => {
      state.alert_modal = { ...payload };
    },
    setTodayOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.form_today_submit.isOpen = payload;
    }
  }
});
export const {
  setChall,
  setDate,
  setTime,
  setIsValid,
  clearChooseForm,
  setAlertOpen,
  setTodayOpen
} = challFormSlice.actions;
export default challFormSlice.reducer;
