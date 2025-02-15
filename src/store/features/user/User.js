import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const UserSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
