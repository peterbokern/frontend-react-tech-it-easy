
import {inventory} from "../constants/inventory.js";

export function countProductsSold() {
    const salesPerProduct = inventory.map(item=> item.sold);
    return salesPerProduct.reduce((acc, item) => acc + item, 0);
}


