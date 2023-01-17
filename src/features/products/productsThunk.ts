import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { Product, ProductMutation } from "../../types";

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchAll",
  async () => {
    const { data } = await axiosApi.get<Product[]>("/products");
    return data;
  }
);

export const createProduct = createAsyncThunk<void, ProductMutation>(
  "products/create",
  async (productMutation) => {
    const serialized = {
      ...productMutation,
      price: parseFloat(productMutation.price),
    };
    await axiosApi.post("/products", serialized);
  }
);