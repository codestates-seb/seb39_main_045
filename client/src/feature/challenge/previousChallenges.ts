import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TargetChallenge {
  createdAt: string
  day: number
  contents: string
  time: string
}

export interface Challenges {
  index: string
  success: boolean
  type: string
  targetDate: number
  targetTime: number
  histories: TargetChallenge[]
}

export interface PreviousChallenges {
  requestStatus: string | null
  totalDate: number
  totalChall: number
  challenges: Challenges[] | null
}

const initialTotalChallenges: PreviousChallenges = {
  requestStatus: '',
  totalDate: 0,
  totalChall: 0,
  challenges: null
};

export const previousChallengesSlice = createSlice({
  name: 'previousChallenges',
  initialState: initialTotalChallenges,
  reducers: {
    getData: (state, { payload }: PayloadAction<PreviousChallenges>) => {
      state.totalDate = payload.totalDate;
      state.totalChall = payload.totalChall;
      state.challenges = payload.challenges;
    },
    updateStatus: (state, { payload }: PayloadAction<string | null>) => {
      state.requestStatus = payload;
    }
  }
});

export const { getData, updateStatus } = previousChallengesSlice.actions;
export default previousChallengesSlice.reducer;
