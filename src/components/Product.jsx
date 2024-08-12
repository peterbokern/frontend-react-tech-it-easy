
import {
    displayProductTitle,
    formatProductPrice,
    displayAvailableScreenSizes,
    displayProductOptions
} from '../helpers/helperFunctions';

const Product = ({product}) => {
    return (
            <div className="product-container">
                <span className="product-image">
                    <img src={product.sourceImg} alt="product image" />
                </span>
                <div className="product-details">
                    <h3 className="product-title">{displayProductTitle(product)}</h3>
                    <p className="product-price">{formatProductPrice(product)}</p>
                    <p className="product-screen-sizes">{displayAvailableScreenSizes(product)}</p>
                    <p className="product-options">{displayProductOptions(product)}</p>
                </div>
            </div>
    );
};

export default Product;
