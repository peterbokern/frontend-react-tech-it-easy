
import Product from './Product.jsx';
import {inventory} from "../constants/inventory.js";
import Button from "./Button.jsx";
import  '../styles/ProductList.css';
import {sortByBestSold, sortByCheapestFirst, sortByMostSuitableForSports} from "../helpers/helperFunctions.js";
import {useState} from "react";

const ProductList = () => {
    const [filteredProducts, setFilteredProducts] = useState(inventory);
    return (
        <div className="product-list">
            <h2>Alle televisies</h2>
            <div className="button-container">
                <Button buttonText={"Best verkocht eerst"} onClickEvent={() => setFilteredProducts(sortByBestSold(inventory))}></Button>
                <Button buttonText={"Goedkoopste eerst"} onClickEvent={()=> setFilteredProducts(sortByCheapestFirst(inventory))}></Button>
                <Button buttonText={"Meest geschikt voor sport"} onClickEvent={()=>setFilteredProducts(sortByMostSuitableForSports(inventory))}></Button>
            </div>

            {filteredProducts.map((product, index) => (
                <Product key={index} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;
