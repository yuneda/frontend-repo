import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const store: any = configureStore({
  reducer: rootReducer,
});

export type AppStore = ReturnType<typeof store>
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;