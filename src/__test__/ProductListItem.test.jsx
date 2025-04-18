import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductListItem from '../components/ProductListItem/ProductListItem';
import productReducer from '../app/features/ListView/ProductSlice';

const createMockStore = (initialState = {}) => {
    return configureStore({
        reducer: {
            products: productReducer
        },
        preloadedState: initialState
    });
};

const renderWithProviders = (component, { store = createMockStore() } = {}) => {
    return render(
        <Provider store={store}>
            <BrowserRouter>
                {component}
            </BrowserRouter>
        </Provider>
    );
};

describe('ProductListItem Component', () => {
    const mockProduct = {
        id: 1,
        title: 'Test Product',
        price: 99.99,
        category: 'test_category',
        description: 'Test description'
    };

    it('renders product information correctly', () => {
        const { asFragment } = renderWithProviders(<ProductListItem productsItem={mockProduct} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
        expect(screen.getByText('test category')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('formats category text correctly', () => {
        const productWithComplexCategory = {
            ...mockProduct,
            category: 'test_category-name'
        };
        const { asFragment } = renderWithProviders(
            <ProductListItem productsItem={productWithComplexCategory} />
        );

        expect(screen.getByText('test category name')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('creates correct product detail link', () => {
        const { asFragment } = renderWithProviders(<ProductListItem productsItem={mockProduct} />);
        
        const detailLink = screen.getByText('Product Details');
        expect(detailLink).toHaveAttribute(
            'href',
            '/product-detail/test-product'
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('dispatches setProductDetails action when clicking detail link', () => {
        const store = createMockStore();
        const dispatchSpy = vi.spyOn(store, 'dispatch');

        const { asFragment } = renderWithProviders(
            <ProductListItem productsItem={mockProduct} />, 
            { store }
        );

        fireEvent.click(screen.getByText('Product Details'));
        
        expect(dispatchSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                type: 'productList/setProductDetails',
                payload: mockProduct
            })
        );
        expect(asFragment()).toMatchSnapshot();
    });
});