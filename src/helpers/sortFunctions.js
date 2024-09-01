
export const sortByBestSold = (array) => {
    return [...array].sort((a, b) => b.sold - a.sold);
};

export const sortByCheapestFirst = (array) => {
    return [...array].sort((a, b) => a.price - b.price);
};

export const sortByMostSuitableForSports = (array) => {
    return [...array].sort((a, b) => b.refreshRate - a.refreshRate);
};

export const sortByLargestScreenSize = (array) => {
    return [...array].sort((a, b) => b.availableSizes[b.availableSizes.length - 1] - a.availableSizes[a.availableSizes.length - 1]);
};