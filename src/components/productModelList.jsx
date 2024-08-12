import { inventory } from "../constants/inventory.js";
import '../styles/BrandList.css';

const BrandList = () => {
    return (
        <div className="brand-list">
            <h2 className="text-center">Alle merken</h2>
            <ul className="list-group">
                {inventory.map((product) => (
                    <li key={product.type} className="list-group-item">
                        {product.brand}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandList;
