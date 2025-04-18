import { describe, it, expect } from 'vitest';
import reducer, {
    setProductListing,
    setProductDetails,
    setCategoryListing,
    setLoading,
    setError
} from '../app/features/ListView/ProductSlice';

describe('Product Reducer', () => {
    const initialState = {
        productListingData: [],
        productDetails: {},
        categoryListingData: [],
        isLoading: false,
        error: null,
    };

    it('should return initial state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle setProductListing', () => {
        const mockProducts = [
            { id: 1, title: 'Product 1' },
            { id: 2, title: 'Product 2' }
        ];
        const nextState = reducer(initialState, setProductListing(mockProducts));
        expect(nextState.productListingData).toEqual(mockProducts);
    });

    it('should handle setProductDetails', () => {
        const mockProduct = { id: 1, title: 'Product 1', price: 99.99 };
        const nextState = reducer(initialState, setProductDetails(mockProduct));
        expect(nextState.productDetails).toEqual(mockProduct);
    });

    it('should handle setCategoryListing', () => {
        const mockCategories = ['electronics', 'clothing'];
        const nextState = reducer(initialState, setCategoryListing(mockCategories));
        expect(nextState.categoryListingData).toEqual(mockCategories);
    });

    it('should handle setLoading', () => {
        const loadingState = reducer(initialState, setLoading(true));
        expect(loadingState.isLoading).toBe(true);

        const notLoadingState = reducer(loadingState, setLoading(false));
        expect(notLoadingState.isLoading).toBe(false);
    });

    it('should handle setError', () => {
        const error = 'An error occurred';
        const nextState = reducer(initialState, setError(error));
        expect(nextState.error).toBe(error);
    });

    it('should maintain state immutability', () => {
        const startState = {
            ...initialState,
            productListingData: [{ id: 1, title: 'Original Product' }]
        };
        const originalState = JSON.parse(JSON.stringify(startState));

        const nextState = reducer(startState, setProductListing([{ id: 2, title: 'New Product' }]));

        expect(startState).toEqual(originalState);
        expect(nextState).not.toEqual(startState);
    });

    it('matches snapshot', () => {
        const state = reducer(initialState, setProductListing([{ id: 1, title: 'Product 1' }]));
        expect(state).toMatchSnapshot();
    });
});