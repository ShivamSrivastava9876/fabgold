import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCustomerDetails,
  loginCustomer,
  logoutCustomer,
  registerCustomer,
  updateCustomerDetails,
} from "./customerProfileApi";

const initialState = {
  status: "idle",
  responseData: null,
  userDetails: null,
  error: null,
};

export const loginCustomerAsync = createAsyncThunk(
  "customer/login",
  async (customerInfo, { rejectWithValue }) => {
    try {
      const response = await loginCustomer(customerInfo);
      if (response.data) {
        const token = response.data.data.auth_token.token; //update according to the response
        localStorage.setItem("token", token);
        return response.data;
      } else if (response.error) {
        return response.error;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerCustomerAsync = createAsyncThunk(
  "customer/register",
  async (customerInfo, { rejectWithValue }) => {
    try {
      const response = await registerCustomer(customerInfo);
      if (response.data) {
        const token = response.data.data.auth_token.token; //update according to the response
        localStorage.setItem("token", token);
        return response.data;
      } else if (response.error) {
        return response.error;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCustomerDetailsAsync = createAsyncThunk(
  "customer/getDetails",
  async () => {
    try {
      const response = await getCustomerDetails();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const updateCustomerDetailsAsync = createAsyncThunk(
  "customer/updateDetails",
  async (customerDetails) => {
    try {
      const response = await updateCustomerDetails(customerDetails);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const logoutCustomerAsync = createAsyncThunk(
  "customer/logout",
  async () => {
    try {
      const response = await logoutCustomer();
      if (response.data) {
        localStorage.removeItem("token");
        return response.data;
      } else if (response.error) {
        return response.error;
      }
    } catch (error) {
      return error;
    }
  }
);

export const customerProfileSlice = createSlice({
  name: "customerProfile",
  initialState,
  reducers: {
    clearResponseState: (state, action) => {
      state.responseData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginCustomerAsync.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(loginCustomerAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.responseData = action.payload;
    });
    builder.addCase(loginCustomerAsync.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    });
    builder.addCase(registerCustomerAsync.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(registerCustomerAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.responseData = action.payload;
    });
    builder.addCase(registerCustomerAsync.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    });
    builder.addCase(getCustomerDetailsAsync.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getCustomerDetailsAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.userDetails = action.payload;
    });
    builder.addCase(getCustomerDetailsAsync.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    });
    builder.addCase(updateCustomerDetailsAsync.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(updateCustomerDetailsAsync.fulfilled, (state, action) => {
      state.status = "idle";
    });
    builder.addCase(updateCustomerDetailsAsync.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    });
    builder.addCase(logoutCustomerAsync.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(logoutCustomerAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.userDetails = null;
    });
    builder.addCase(logoutCustomerAsync.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    });
  },
});

export const getLoginErrorMessage = (state) => state.customerProfile.error;
export const getRegistrationErrorMessage = (state) =>
  state.customerProfile.error;
export const getCustomerInfo = (state) => state.customerProfile.userDetails;
export const getResponseData = (state) => state.customerProfile.responseData;

export const { clearResponseState } = customerProfileSlice.actions;
export default customerProfileSlice.reducer;
