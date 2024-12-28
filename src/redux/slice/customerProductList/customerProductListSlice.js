import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCustomerProductDetails,
  getCustomerProductList,
} from "./customerProductListApi";

const initialState = {
  status: "idle",
  productListingData: [],
  productDetails: [],
  error: null,
};

export const getCustomerProductListAsync = createAsyncThunk(
  "customer/getProduct",
  async () => {
    try {
      const response = await getCustomerProductList();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getCustomerProductDetailsAsync = createAsyncThunk(
  "customer/getProductDetails",
  async (productId) => {
    try {
      const response = await getCustomerProductDetails(productId);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const productCustomerPanelSlice = createSlice({
  name: "customerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerProductListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCustomerProductListAsync.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload) {
          state.productListingData = action.payload.data;
        }
      })
      .addCase(getCustomerProductListAsync.rejected, (state, action) => {
        state.status = action.payload;
      })
      .addCase(getCustomerProductDetailsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCustomerProductDetailsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload) {
          state.productListingData = action.payload.data;
        }
      })
      .addCase(getCustomerProductDetailsAsync.rejected, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const getConsumerProductList = (state) =>
  state.customerProduct.productListingData;
export const getConsumerProductDetails = (state) =>
  state.customerProduct.productDetails;
export default productCustomerPanelSlice.reducer;
