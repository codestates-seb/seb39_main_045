import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SubmitHistories {
  day: number
  createdAt: string
  contents: string
  time: string | null
}

export interface ActiveChallenge {
  requestStatus: string | null
  challengeType: string | null
  targetDate: number
  progress: number
  histories: SubmitHistories[]
  stringProgress: string
}

const InitialChallenge: ActiveChallenge = {
  challengeType: null,
  targetDate: 0,
  progress: 0,
  histories: [],
  requestStatus: null,
  stringProgress: '0'
};

export const activeChallengeSlice = createSlice({
  name: 'activeChallenge',
  initialState: InitialChallenge,
  reducers: {
    getData: (state, { payload }: PayloadAction<ActiveChallenge>) => {
      state.targetDate = payload.targetDate;
      state.histories = payload.histories;
    },
    updateStatus: (state, { payload }: PayloadAction<string | null>) => {
      state.requestStatus = payload;
    },
    setTypeToKorean: (state, { payload }: PayloadAction<string | null>) => {
      state.challengeType = payload;
    },
    setProgressToString: (state, { payload }: PayloadAction<string | string>) => {
      state.stringProgress = payload;
    }
  }
});

export const {
  getData,
  updateStatus,
  setTypeToKorean,
  setProgressToString
} = activeChallengeSlice.actions;
export default activeChallengeSlice.reducer;
