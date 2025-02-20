import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const ProductSlice = createSlice({
  name: 'PRODUCT_SLICE',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = ProductSlice.actions;

export default ProductSlice.reducer;

