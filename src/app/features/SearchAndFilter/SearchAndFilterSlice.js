import { createSlice } from "@reduxjs/toolkit";

const searchAndFilterSlice = createSlice({
    name: "searchAndFilter",
    initialState: {
        searchQuery: "", 
        categoryFilterQuery: "", 
        filteredProducts: [],
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setCategoryFilterQuery: (state, action) => {
            state.categoryFilterQuery = action.payload;
        },
        setFilteredProducts: (state, action) => {
            let products = action.payload;
            state.filteredProducts = products?.filter((productItem) => {
                let matchProductTitle = state.searchQuery === "" || productItem?.title?.toLowerCase().includes(state.searchQuery.toLowerCase());
                let matchProductCategory = state.categoryFilterQuery === "" || productItem?.category === state.categoryFilterQuery;
                return matchProductTitle && matchProductCategory;
            })
        }
    }
})

export default searchAndFilterSlice.reducer;
export const { setSearchQuery, setCategoryFilterQuery, setFilteredProducts } = searchAndFilterSlice.actions;