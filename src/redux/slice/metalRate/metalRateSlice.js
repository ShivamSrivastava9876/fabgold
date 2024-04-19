import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCategory, createGoldRate, createSilverRate, getGoldRate, getSilverRate } from "./metalRateApi";

const initialState = {
    status: 'idle',
    goldData: "",
    silverData: "",
    error: ""
}

export const getGoldRateAsync = createAsyncThunk(
    "metalRate/getGoldRate",
    async () => {
        try {
            const response = await getGoldRate();
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
);

export const createGoldRateAsync = createAsyncThunk(
    "metalRate/createGoldRate",
    async (goldRateInfo) => {
        try {
            const response = await createGoldRate(goldRateInfo);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
)

export const getSilverRateAsync = createAsyncThunk(
    "metalRate/getSilverRate",
    async () => {
        try {
            const response = await getSilverRate();
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
);

export const createSilverRateAsync = createAsyncThunk(
    "metalRate/createSilverRate",
    async (silverRateInfo) => {
        try {
            const response = await createSilverRate(silverRateInfo);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
)

const metalRateSlice = createSlice({
    name: "metal",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGoldRateAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGoldRateAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload) {
                    state.goldData = action.payload;
                }
            })
            .addCase(getGoldRateAsync.rejected, (state, action) => {
                state.status = action.payload;
            })
            .addCase(createGoldRateAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createGoldRateAsync.fulfilled, (state, action) => {
                state.status = 'idle';
            })
            .addCase(createGoldRateAsync.rejected, (action, state) => {
                state.status = 'idle';
                state.error = action.payload;
            })
            .addCase(getSilverRateAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSilverRateAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload) {
                    state.silverData = action.payload;
                }
            })
            .addCase(getSilverRateAsync.rejected, (state, action) => {
                state.status = action.payload;
            })
    }
})

export const getGoldData = (state) => state.metalRate.goldData;
export const getSilverData = (state) => state.metalRate.silverData;
export default metalRateSlice.reducer;