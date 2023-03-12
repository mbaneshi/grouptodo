import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import groupReducer from "../features/group/groupSlicer";
export const store = configureStore({
  reducer: {
    group: groupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;




