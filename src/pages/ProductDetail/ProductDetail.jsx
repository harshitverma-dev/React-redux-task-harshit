import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ProductDetail.css';
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const { productDetails } = useSelector((state) => state.products);

    if (!productDetails) {
        return <Loader />;
    }

    return (
        <div className="product-detail-wrapper">
            <div className="product-detail-container">
                <div className="product-info-section">
                    <div className="product-header">
                        <span className="product-brand">{productDetails.brand}</span>
                        <div className='product-title-backbtn'>
                            <h1 className="product-title">{productDetails.title}</h1>
                            <div className='back-btn'>
                                <Link to="/" className="back-to-listing">
                                    Back to Product Listing
                                </Link>
                            </div>
                        </div>
                        <span className="product-category">{productDetails.category.replaceAll(/[-_]/g, ' ')}</span>
                    </div>
                    <div className="product-pricing">
                        <div className="price-block">
                            <span className="original-price">${productDetails.price}</span>
                            {productDetails.discountPercentage > 0 && (
                                <span className="discount">
                                    -{productDetails.discountPercentage}% OFF
                                </span>
                            )}
                        </div>
                        <div className="stock-info">
                            <span className={`stock-badge ${productDetails.stock < 10 ? 'low' : ''}`}>
                                {productDetails.stock < 10 ? 'Low Stock' : 'In Stock'}
                                ({productDetails.stock} units)
                            </span>
                        </div>
                    </div>
                    <div className="product-description">
                        <h3>Description</h3>
                        <p>{productDetails.description}</p>
                    </div>
                    <div className="product-details-grid">
                        <div className="detail-item">
                            <span className="label">SKU</span>
                            <span className="value">{productDetails.sku}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Weight</span>
                            <span className="value">{productDetails.weight}g</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Rating</span>
                            <span className="value">
                                {productDetails.rating}
                            </span>
                        </div>
                    </div>
                    <div className="shipping-info">
                        <h3>Shipping Information</h3>
                        <p>{productDetails.shippingInformation}</p>
                    </div>
                    <div className="reviews-section">
                        <h3>Customer Reviews</h3>
                        <div className="reviews-grid">
                            {productDetails.reviews?.map((review, index) => (
                                <div key={index} className="review-card">
                                    <div className="review-header">
                                        <span className="reviewer">{review.reviewerName}</span>
                                        <span className="rating">{'★'.repeat(review.rating)}</span>
                                    </div>
                                    <p className="comment">{review.comment}</p>
                                    <span className="date">
                                        {new Date(review.date).toLocaleDateString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;