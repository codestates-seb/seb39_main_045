import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Challenge {
  challengeType: string
  targetDate: number
  targetTime: number
  isValid: boolean
}
interface Thanks {
  text: string
}
interface Study {
  image: string
  time: number
}
interface ChallengeForm {
  challenge_form: Challenge
  thanks_form: Thanks
  study_form: Study
}
const initialChallenge = {
  challengeType: 'none',
  targetDate: 0,
  targetTime: 0,
  isValid: false
};
const initialThanks = {
  text: ''
};
const initialStudy = {
  image: '',
  time: 0
};
const initialState: ChallengeForm = {
  challenge_form: initialChallenge,
  thanks_form: initialThanks,
  study_form: initialStudy
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
    setThanksText: (state, { payload }: PayloadAction<Thanks>) => {
      state.thanks_form = {
        ...state.thanks_form,
        ...payload
      };
    },
    clearThanksText: (state) => {
      state.thanks_form = initialThanks;
    },
    setStudyImage: (
      state,
      { payload }: PayloadAction<Pick<Study, 'image'>>
    ) => {
      state.study_form = {
        ...state.study_form,
        image: payload.image
      };
    },
    setStudyTime: (state, { payload }: PayloadAction<Pick<Study, 'time'>>) => {
      state.study_form = {
        ...state.study_form,
        time: payload.time
      };
    }
  }
});
export const {
  setChall,
  setDate,
  setTime,
  setIsValid,
  clearChooseForm,
  setThanksText,
  clearThanksText,
  setStudyImage,
  setStudyTime
} = challFormSlice.actions;
export default challFormSlice.reducer;
