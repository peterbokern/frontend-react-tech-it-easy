import './styles/App.css';
import './styles/globals.css';
import './styles/reusables.css';

import {countProductsSold} from "./helpers/countProductsSold.js";


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
                            <p className="count">{countProductsSold()}</p>
                        </article>
                        <article className="sales-card purple">
                            <p className="card-title">Aantal ingekochte producten</p>
                            <p className="count">{countProductsSold()}</p>
                        </article>
                        <article className="sales-card red">
                            <p className="card-title">Aantal te verkopen producten</p>
                            <p className="count">{countProductsSold()}</p>
                        </article>
                    </div>
                </section>

            </main>

        </>
    )
}

export default App
