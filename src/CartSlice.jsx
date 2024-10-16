import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // Initialize with an empty array for cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer for adding items to the cart
    addItem: (state, action) => {
      const plant = action.payload;

      // Check if the item is already in the cart
      const existingItem = state.cartItems.find(item => item.name === plant.name);

      if (existingItem) {
        existingItem.quantity += 1; // If item exists, increase quantity
      } else {
        // If not, add the item to the cart with quantity 1
        state.cartItems.push({ ...plant, quantity: 1 });
      }
    },

    // Reducer for removing items from the cart
    removeItem: (state, action) => {
      const plantName = action.payload;

      // Filter out the item from the cart based on its name
      state.cartItems = state.cartItems.filter(item => item.name !== plantName);
    },

    // Reducer for updating the quantity of items in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // Find the item in the cart by its name
      const existingItem = state.cartItems.find(item => item.name === name);

      // If found, update its quantity
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

// Export the action creators to use in the components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to use in the store.js
export default cartSlice.reducer;
