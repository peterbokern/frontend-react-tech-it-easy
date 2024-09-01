import './styles/App.css';
import './styles/globals.css';
import './styles/reusables.css';
import './styles/ProductList.css';
import './styles/Product.css'

import {bestSellingTv, inventory} from "./constants/inventory.js";


import {
    countSoldProducts,
    countOriginalStock,
    countProductsToSell,
    displayProductTitle,
    displayAvailableScreenSizes,
    formatProductPrice
} from "./helpers/helperFunctions.js";
import ProductList from "./components/ProductList.jsx";
import BrandList from "./components/Brandlist.jsx";
import Product from "./components/Product.jsx";


function App() {
    return (
        <>
            <header className="container">
                <h1>Tech it easy dashboard</h1>
            </header>
            <main>
                <section className="container">
                    <h2>Verkoopoverzicht</h2>
                    <div className="sales-dashboard">
                        <article className="sales-card green">
                            <p className="card-title">Aantal verkochte producten</p>
                            <p className="count">{countSoldProducts(inventory)}</p>
                        </article>
                        <article className="sales-card purple">
                            <p className="card-title">Aantal ingekochte producten</p>
                            <p className="count">{countOriginalStock(inventory)}</p>
                        </article>
                        <article className="sales-card red">
                            <p className="card-title">Aantal te verkopen producten</p>
                            <p className="count">{countProductsToSell(inventory)}</p>
                        </article>
                    </div>
                </section>
                <section className="container">
                    <h2>Best verkochte TV</h2>
                    <Product product={bestSellingTv}></Product>
                </section>
                <section className="container">
                    <ProductList className="product-list"/>
                </section>
                <section className="container">
                    <BrandList/>
                </section>
            </main>

        </>
    )
}

export default App
