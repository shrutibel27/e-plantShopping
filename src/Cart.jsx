import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // Get cart items from the Redux store

  // Function to calculate total amount
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.cost.slice(1)) * item.quantity, 0)
      .toFixed(2);
  };

  const handleContinueShopping = () => {
    // Logic to continue shopping, e.g., navigate back to product listing
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}
          <h2>Total Amount: ${calculateTotalAmount()}</h2>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button onClick={handleCheckoutShopping}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
