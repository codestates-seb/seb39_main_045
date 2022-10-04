import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Histories {
  day: number
  createdAt: string
  contents: string
  time: string | null
}

interface Challenge {
  requestStatus: string | null
  challengeType: string | null
  targetDate: number | null
  progress: string | null
  histories: Histories[]
}

const InitialChallenge: Challenge = {
  challengeType: null,
  targetDate: null,
  progress: null,
  histories: [],
  requestStatus: '기록을 불러오고 있어요'
};

export const activeChallengeSlice = createSlice({
  name: 'activeChallenge',
  initialState: InitialChallenge,
  reducers: {
    getData: (state, { payload }: PayloadAction<Challenge>) => {
      state.targetDate = payload.targetDate;
      state.progress = payload.progress;
      state.challengeType = payload.challengeType;
      state.histories = payload.histories;
    },
    updateStatus: (state, { payload }: PayloadAction<string | null>) => {
      state.requestStatus = payload;
    }
  }
});

export const { getData, updateStatus } = activeChallengeSlice.actions;
export default activeChallengeSlice.reducer;
