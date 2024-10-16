import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <h1>Paradise Nursery</h1>
      <div className="cart-icon">
        <span>Cart ({totalItems})</span>
      </div>
    </nav>
  );
};

export default Navbar;
