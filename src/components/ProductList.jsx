import Product from './Product.jsx';
import Button from "./Button.jsx";
import {inventory} from "../constants/inventory.js";
import {
    sortByBestSold,
    sortByCheapestFirst,
    sortByLargestScreenSize,
    sortByMostSuitableForSports
} from "../helpers/sortFunctions.js";
import {useState} from "react";

const ProductList = () => {
    const [filteredProducts, setFilteredProducts] = useState(inventory);
    return (
        <div className="product-list">
            <h2>Alle televisies</h2>
            <div className="button-container">
                <Button buttonText={"Best verkocht"}
                        onClickEvent={() => setFilteredProducts(sortByBestSold(inventory))}></Button>
                <Button buttonText={"Goedkoopste"}
                        onClickEvent={() => setFilteredProducts(sortByCheapestFirst(inventory))}></Button>
                <Button buttonText={"Meest geschikt voor sport"}
                        onClickEvent={() => setFilteredProducts(sortByMostSuitableForSports(inventory))}></Button>
                <Button buttonText={"Grootste schermgrootte"}
                        onClickEvent={() => setFilteredProducts(sortByLargestScreenSize(inventory))}></Button>
            </div>
            {filteredProducts.map((product, index) => (
                <Product key={index} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;
