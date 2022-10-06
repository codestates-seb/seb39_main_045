import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const selectChallenge = (state: RootState) => state.previousChallenges;

export const selectDiaryTypeChallenge = createSelector(selectChallenge, (state) =>
  state.challenges?.filter((chall) => chall.type === 'thanks')
);

export const selectStudyTypeChallenge = createSelector(selectChallenge, (state) =>
  state.challenges?.filter((chall) => chall.type === 'study')
);

export const selectMorningTypeChallenge = createSelector(selectChallenge, (state) =>
  state.challenges?.filter((chall) => chall.type === 'morning')
);
