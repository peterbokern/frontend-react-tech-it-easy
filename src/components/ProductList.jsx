
import Product from './Product.jsx';
import {inventory} from "../constants/inventory.js";
import Button from "./Button.jsx";
import  '../styles/ProductList.css';

const ProductList = () => {
    return (
        <div className="product-list">
            <h2>Alle televisies</h2>
            <div className="button-container">
                <Button buttonText={"Best verkocht eerst"}></Button>
                <Button buttonText={"Goedkoopste eerst"}></Button>
                <Button buttonText={"Meest geschikt voor sport"}></Button>
            </div>

            {inventory.map((product, index) => (
                <Product key={index} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;
