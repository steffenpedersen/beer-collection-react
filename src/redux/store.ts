import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import beersReducer from '../components/beers/beersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    beers: beersReducer,
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
