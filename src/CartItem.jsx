import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, addItem, removeItem } from '../slices/CartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = () => {
        if (item.quantity === 1) {
            dispatch(removeItem(item.name));
        } else {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        }
    };

    const handleRemove = () => {
        dispatch(removeItem(item.name));
    };

    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.cost}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;
