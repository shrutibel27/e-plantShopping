import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../slices/CartSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div className="product-grid">
            {plantsArray.map((plant) => (
                <div key={plant.name}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p>Price: ${plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
