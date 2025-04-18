import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';

const renderWithRouter = (component) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    );
};

describe('NotFound Component', () => {
    it('renders 404 heading', () => {
        renderWithRouter(<NotFound />);
        expect(screen.getByText('404')).toBeInTheDocument();
    });

    it('renders error message', () => {
        renderWithRouter(<NotFound />);
        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
        expect(
            screen.getByText("The page you are looking for doesn't exist or has been moved.")
        ).toBeInTheDocument();
    });

    it('renders home page link', () => {
        renderWithRouter(<NotFound />);
        const homeLink = screen.getByText('Go to Product Listing');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    });

    it('matches snapshot', () => {
        const { asFragment } = renderWithRouter(<NotFound />);
        expect(asFragment()).toMatchSnapshot();
    });
});