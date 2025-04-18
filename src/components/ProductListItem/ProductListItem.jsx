import React from 'react'
import { Link } from 'react-router-dom'
import './ProductListItem.css'
import { useDispatch } from 'react-redux'
import { setProductDetails } from '../../app/features/ListView/ProductSlice'

const ProductListItem = (props) => {
    const dispatch = useDispatch();
    const { productsItem } = props
    return (
        <div className="product-listing-item">
            <div className="product-listing-info">
                <h3 className="product-listing-title">{productsItem.title}</h3>
                <div className="product-listing-details">
                    <span className="price">${productsItem.price}</span>
                    <span className="category-badge">{productsItem.category.replace(/[-_]/g, ' ')}</span>
                </div>

            </div>
            <Link onClick={()=>dispatch(setProductDetails(productsItem))} to={`/product-detail/${productsItem.title.toLowerCase().replaceAll(' ', '-')}`} className="product-details-btn">
                Product Details
            </Link>
        </div>
    )
}

export default ProductListItem