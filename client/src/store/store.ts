import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../feature/form';
import userReducer from '../feature/profile/user';
import locationSlice from '../feature/location';

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationSlice,
    form: formReducer
  },
  devTools: true
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
