import './styles/App.css';
import './styles/globals.css';
import './styles/reusables.css';
import {bestSellingTv} from "./constants/inventory.js";

import {
    countSoldProducts,
    countOriginalStock,
    countProductsToSell,
    displayProductTitle,
    displayAvailableScreenSizes,
    formatProductPrice
} from "./helpers/helperFunctions.js";
import ProductList from "./components/ProductList.jsx";


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
                            <p className="count">{countSoldProducts()}</p>
                        </article>
                        <article className="sales-card purple">
                            <p className="card-title">Aantal ingekochte producten</p>
                            <p className="count">{countOriginalStock()}</p>
                        </article>
                        <article className="sales-card red">
                            <p className="card-title">Aantal te verkopen producten</p>
                            <p className="count">{countProductsToSell()}</p>
                        </article>
                    </div>
                </section>
                <section className="container">
                    <h2>Best verkochte TV</h2>
                    <div className="product-container best-sold">
                        <span className="product-image"><img src={bestSellingTv.sourceImg} alt="product image"/></span>
                        <div className="product-details">
                            <h3 className="product-title">{displayProductTitle(bestSellingTv)}</h3>
                            <p className="product-price">{formatProductPrice(bestSellingTv)}</p>
                            <p className="product-screen-sizes">{displayAvailableScreenSizes(bestSellingTv)}</p>
                            <p>[check-icon] wifi [not-icon] speech [check-icon] hdr [check-icon] bluetooth [not-icon] ambilight</p>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <ProductList className="product-list"/>
                </section>
            </main>

        </>
    )
}

export default App
