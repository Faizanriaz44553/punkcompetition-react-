import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './features/user/User'



export const store = configureStore({
  reducer: {UserSlice},
})