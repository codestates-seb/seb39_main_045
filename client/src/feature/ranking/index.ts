import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Ranker {
  rank: number
  username: string
  stamps: number
}

export interface IRankings {
  requestStatus: string | null
  rankers: Ranker[]
  myRanking: Ranker | null
  myStamps: number[]
}

const InitialRankings: IRankings = {
  requestStatus: null,
  rankers: [],
  myRanking: null,
  myStamps: []
};

export const rankingReducer = createSlice({
  name: 'ranking',
  initialState: InitialRankings,
  reducers: {
    getData: (state, { payload }: PayloadAction<IRankings>) => {
      state.rankers = payload.rankers;
      state.myRanking = payload.myRanking;
      state.myStamps = payload.myStamps;
    },
    updateStatus: (state, { payload }: PayloadAction<string | null>) => {
      state.requestStatus = payload;
    }
  }
});

export const { getData, updateStatus } = rankingReducer.actions;
export default rankingReducer.reducer;
