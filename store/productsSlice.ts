import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

// Type for our state
export interface ProductCurrentPageState {
  currentPageState: string;
}

// Initial state
const initialState: ProductCurrentPageState = {
  currentPageState: '2',
};

// Actual Slice
export const productsSlice = createSlice({
  name: 'productsPage',
  initialState,
  reducers: {
    // Action to set the authentication status
    setProductCurrentPageState(state, action) {
      state.currentPageState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
  },
});

export const { setProductCurrentPageState } = productsSlice.actions;
export const selectProductCurrentPageState = (state: AppState) =>
  state.productsPage.currentPageState;
export default productsSlice.reducer;
