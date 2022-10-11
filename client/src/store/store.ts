import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../feature/form';
import userReducer from '../feature/profile/user';
import locationReducer from '../feature/location';
import challReducer from 'feature/challenge/form';
import activeChallengeReducer from 'feature/challenge/activeChallenge';
import previousChallengesReducer from 'feature/challenge/previousChallenges';
import rankingReducer from 'feature/ranking';

export const store = configureStore({
  reducer: {
    chall: challReducer,
    user: userReducer,
    location: locationReducer,
    form: formReducer,
    activeChallenge: activeChallengeReducer,
    previousChallenges: previousChallengesReducer,
    rankingReducer
  },
  devTools: true
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
