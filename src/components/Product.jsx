import PropTypes from 'prop-types';
import {
    displayProductTitle,
    formatProductPrice,
    displayAvailableScreenSizes, productOutOfStock,
} from '../helpers/helperFunctions';

import checkIcon from '../assets/check.png';
import minusIcon from '../assets/minus.png';
import '../styles/Product.css';
import outOfStock from "../assets/out-of-stock.png";

const Product = ({ product }) => {
    const productOptions = (options) => {
        return (
            <div>
                {options.map((option, index) => (
                    <span key={index} className="product-option-wrapper">
                        {option.name}
                        <img className='product-option-image'
                             src={option.applicable ? `${checkIcon}` : `${minusIcon}`}
                             alt={option.applicable ? 'check' : 'min'}
                        />
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="product-container">
            <span className="product-image">
                <img src={product.sourceImg} alt="product image"/>
            </span>
            <div className="product-details">
                <h3 className="product-title">{displayProductTitle(product)}</h3>
                <p className="product-price">{formatProductPrice(product)}</p>
                <p className="product-screen-sizes">{displayAvailableScreenSizes(product)}</p>
                {productOptions(product.options)}
            </div>
            {productOutOfStock(product) && <img className='product-out-of-stock' src={outOfStock} alt="out-of-stock"/> }
        </div>
    );
};

// Define PropTypes for the Product component
Product.propTypes = {product: PropTypes.object.isRequired,};

export default Product;
