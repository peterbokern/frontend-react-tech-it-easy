import {inventory} from "../constants/inventory.js";

export function countSoldProducts() {
    const salesPerProduct = inventory.map(item => item.sold);
    return salesPerProduct.reduce((acc, item) => acc + item, 0);
}

export function countOriginalStock() {
    const stockPerProduct = inventory.map(item => item.originalStock);
    return stockPerProduct.reduce((acc, item) => acc + item, 0);
}

export const countProductsToSell = () => {
    return countOriginalStock() - countSoldProducts();
};

export function displayProductTitle(product) {
    return `${product.brand} ${product.type} - ${product.name}`;
}

export function formatProductPrice(product) {
    return `€${product.price},-`;
}

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

function inchesToCentimeters(inches) {
    const centimetersPerInch = 2.54;
    return inches * centimetersPerInch;
}

export function displayProductOptions(product) {
    let optionsString = ""
    product.options.forEach(option => {
        optionsString += `${option.name} ${option.applicable} `;
    });
    return optionsString;
}

export const sortByBestSold = (array) => {
    return [...array].sort((a, b) => b.sold - a.sold);
};

export const sortByCheapestFirst = (array) => {
    return [...array].sort((a, b) => a.price - b.price);
};

export const sortByMostSuitableForSports = (array) => {
    return [...array].sort((a, b) => b.refreshRate - a.refreshRate);
};