import PropTypes from 'prop-types';
import {
    displayProductTitle,
    formatProductPrice,
    displayAvailableScreenSizes,
} from '../helpers/helperFunctions';

import checkIcon from '../assets/check.png';
import minusIcon from '../assets/minus.png';
import '../styles/Product.css';

const Product = ({ product }) => {
    const productOptions = (options) => {
        return (
            <div>
                {options.map((option, index) => (
                    <span key={index} className="product-option-wrapper">
                        {option.name}
                        <img className='product-option-image'
                             src={option.applicable ? checkIcon : minusIcon}
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
        </div>
    );
};

// Define PropTypes for the Product component
Product.propTypes = {
    product: PropTypes.shape({
        sourceImg: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            applicable: PropTypes.bool.isRequired,
        })).isRequired,
    }).isRequired,
};

export default Product;
