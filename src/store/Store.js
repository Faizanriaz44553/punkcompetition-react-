import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/User';
import userDataReducer from './features/userData/UserData';
import ProductSliceReducer from './features/productData/ProductData';

export const store = configureStore({
  reducer: {
    user: userReducer,
    UserData: userDataReducer,
    ProductData : ProductSliceReducer
  },
});

export default store;
