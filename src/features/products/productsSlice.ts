import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../../types";
import { createProduct, fetchProducts } from "./productsThunk";

interface ProductsState {
  items: Product[];
  fetchLoading: boolean;
  creatingProduct: boolean;
}

const initialState: ProductsState = {
  items: [],
  fetchLoading: false,
  creatingProduct: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload: products }) => {
        state.fetchLoading = false;
        state.items = products;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.fetchLoading = false;
      })
      .addCase(createProduct.pending, (state) => {
        state.creatingProduct = true;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.creatingProduct = false;
      })
      .addCase(createProduct.rejected, (state) => {
        state.creatingProduct = false;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.items;
export const selectProductsFetching = (state: RootState) =>
  state.products.fetchLoading;
export const selectProductCreating = (state: RootState) =>
  state.products.creatingProduct;