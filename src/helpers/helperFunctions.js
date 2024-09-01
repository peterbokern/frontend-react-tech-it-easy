import {inventory} from "../constants/inventory.js";

//Opdracht 1a
 export function countSoldProducts(inventory) {
    const salesPerProduct = inventory.map(item => item.sold);
    return salesPerProduct.reduce((acc, item) => acc + item, 0);
}
/*console.log('Count sold products',countSoldProducts(inventory));*/

 export function productOutOfStock(product) {
     return product.sold === product.originalStock;
 }

//opdracht 1c
export function countOriginalStock(inventory) {
    const stockPerProduct = inventory.map(item => item.originalStock);
    return stockPerProduct.reduce((acc, item) => acc + item, 0);
}
/*console.log('Count original stock: ',countOriginalStock(inventory));*/

//Opdracht 1e
export const countProductsToSell = (inventory) => {
    return countOriginalStock(inventory) - countSoldProducts(inventory);
};

/*console.log('Count products to sell: ', countProductsToSell(inventory));*/

//Opdracht 2a
export function displayProductTitle(product) {
    return `${product.brand} ${product.type} - ${product.name}`;
}

/*console.log(inventory.map(item => displayProductTitle(item)));*/

// Opdracht 2b
export function formatProductPrice(product) {
    return `€${product.price},-`;
}

/*console.log(inventory.map(item => formatProductPrice(item)));*/

//Opdracht 2c
export function displayAvailableScreenSizes(product) {
    let availableScreenSizes = "";
    for (let i = 0; i < product.availableSizes.length; i++) {
        availableScreenSizes += `${product.availableSizes[i]} inch (${inchesToCentimeters(product.availableSizes[i])})`;
        if (i < product.availableSizes.length - 1) {
            availableScreenSizes += " | ";
        }
    }
    return availableScreenSizes;
}

/*console.log(inventory.map(item => displayAvailableScreenSizes(item)));*/

function inchesToCentimeters(inches) {
    const centimetersPerInch = 2.54;
    return inches * centimetersPerInch;
}


