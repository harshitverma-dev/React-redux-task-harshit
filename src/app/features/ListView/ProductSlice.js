import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productList",
    initialState: {
        productListingData: [], 
        productDetails: {}, 
        categoryListingData: [], 
        isLoading: false, 
        error: null, 
    },
    reducers: {
        setProductListing: (state, action) => {
            state.productListingData = action.payload;
        },
        setProductDetails: (state, action) => {
            state.productDetails = action.payload;
        },
        setCategoryListing: (state, action) => {
            state.categoryListingData = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export default productSlice.reducer;
export const { setProductListing, setProductDetails, setCategoryListing, setLoading, setError } = productSlice.actions;