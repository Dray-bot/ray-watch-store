// src/store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  cart: [], // Initialize an empty cart array
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product], // Add product to the cart
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id), // Remove product by id
    })),
  // Add the clearCart function to clear the entire cart
  clearCart: () => set({ cart: [] }), 
}));

export default useStore;
