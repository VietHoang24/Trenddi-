import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

// Type for our state
export interface ProductsState {
  currentPageState: string;
  isCPImpression:boolean;
  isCPClick:boolean;
}

// Initial state
const initialState: ProductsState = {
  currentPageState: '2',
  isCPImpression:true,
  isCPClick:false,
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
    setIsCPImpressionState(state, action) {
      state.isCPImpression = action.payload;
    },
    setIsCPClickState(state, action) {
      state.isCPClick = action.payload;
    },
   

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
  },
});

export const { setProductCurrentPageState,
  setIsCPImpressionState,setIsCPClickState } = productsSlice.actions;
export const selectProductCurrentPageState = (state: AppState) =>
  state.productsPage.currentPageState;
  export const selectIsCPImpressionState = (state: AppState) =>
  state.productsPage.isCPImpression;
  export const selectIsCPClickState = (state: AppState) =>
  state.productsPage.isCPClick;
export default productsSlice.reducer;
