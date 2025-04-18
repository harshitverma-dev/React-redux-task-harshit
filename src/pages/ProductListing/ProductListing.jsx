import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import './ProductListing.css';
import { useDispatch, useSelector } from "react-redux";
import { setProductListing, setCategoryListing, setLoading, setError } from "../../app/features/ListView/ProductSlice";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import Loader from "../../components/Loader/Loader";
import { setSearchQuery, setCategoryFilterQuery, setFilteredProducts } from "../../app/features/SearchAndFilter/SearchAndFilterSlice";

const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const searchAndFilter = useSelector((state) => state.searchAndFilter);


    const getProductList = () => {
        dispatch(setLoading(true));
        axios.get('https://dummyjson.com/products?limit=190')
            .then((response) => {
                let getAllCategories = response.data.products.map((item) => item.category);
                let uniqueCategories = [...new Set(getAllCategories)];
                dispatch(setCategoryListing(uniqueCategories));
                dispatch(setProductListing(response.data.products));
                dispatch(setLoading(false));
            })
            .catch((error) => {
                console.error("Error fetching product list:", error);
                dispatch(setLoading(false));
                dispatch(setError(error));
            });
    }

    const onChange = (e) => {
        const productSearchQuery = e.target.value.toLowerCase();
        dispatch(setSearchQuery(productSearchQuery));
    }

    useEffect(() => {
       if(products?.productListingData.length > 0){
        dispatch(setFilteredProducts(products?.productListingData));
       }
    }, [products?.productListingData, searchAndFilter.searchQuery, searchAndFilter.categoryFilterQuery, dispatch]);

    useEffect(() => {
        getProductList();
    }, [])


    return (
        <div className="product-listing-container">
            <div className="product-search-container">
                <input type="text" placeholder="Search By Product Name" className="search-product-name" value={searchAndFilter.searchQuery} onChange={onChange} />
            </div>
            <div className="product-category-filter">
                <div>
                    <h3>Product Categories</h3>
                    <ul className="category-list">
                        <select value={searchAndFilter.categoryFilterQuery} onChange={(e) => dispatch(setCategoryFilterQuery(e.target.value))}>
                            <option value="">All Category</option>
                            {products?.categoryListingData?.map((categoryItem, index) => (
                                <option key={index} value={categoryItem}>{categoryItem.replace(/[-_]/g, ' ')}</option>
                            ))}
                        </select>
                    </ul>
                </div>
                <div className="product-count"><p>{searchAndFilter?.filteredProducts?.length}</p><p>Products</p></div>
            </div>
            {
                searchAndFilter?.filteredProducts?.map((productsItem) => {
                    return (
                        <ProductListItem key={productsItem.id} productsItem={productsItem} />
                    )
                })
            }
            {
                products?.isLoading && <Loader />
            }
        </div >
    )
}

export default ProductListing;