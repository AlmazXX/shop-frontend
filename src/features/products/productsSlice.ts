import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../../types";

interface ProductsState {
  items: Product[];
  fetchLoading: boolean;
}

const initialState: ProductsState = {
  items: [],
  fetchLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.items;
export const selectProductsFetching = (state: RootState) =>
  state.products.fetchLoading;