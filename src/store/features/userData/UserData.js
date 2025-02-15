import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const UserDataSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = UserDataSlice.actions;
export default UserDataSlice.reducer; // ✅ Export only the reducer
