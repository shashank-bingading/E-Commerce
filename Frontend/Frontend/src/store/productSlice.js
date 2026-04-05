import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from "../services/api";

//fetching products from backend
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await API.get("/products");
        return response.data;
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;