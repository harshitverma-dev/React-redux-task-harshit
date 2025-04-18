import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../components/Loader/Loader';
import React from 'react';

describe('Loader Component', () => {
    it('renders loader container', () => {
        render(<Loader />);
        const loaderContainer = screen.getByTestId('loader-container');
        expect(loaderContainer).toBeInTheDocument();
    });

    it('renders SVG element', () => {
        render(<Loader />);
        const svgElement = screen.getByTestId('loader-svg');
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute('width', '40');
        expect(svgElement).toHaveAttribute('height', '40');
    });

    it('has correct stroke color', () => {
        render(<Loader />);
        const svgElement = screen.getByTestId('loader-svg');
        expect(svgElement).toHaveAttribute('stroke', '#4F46E5');
    });

    it('matches snapshot', () => {
        const { container } = render(<Loader />);
        expect(container).toMatchSnapshot();
    });
});