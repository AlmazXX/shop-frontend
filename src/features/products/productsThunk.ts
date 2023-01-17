import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { Product } from "../../types";

export const fetchProducts = createAsyncThunk<Product[]>('products/fetchAll',async () => {
  const {data} = await axiosApi.get<Product[]>('/products')
  return data
})