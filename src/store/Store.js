import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/User';
import userDataReducer from './features/userData/UserData';

export const store = configureStore({
  reducer: {
    user: userReducer,
    UserData: userDataReducer,
  },
});

export default store;
