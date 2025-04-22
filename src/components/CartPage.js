import React from 'react';
import useStore from '../store';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useStore(); // Access clearCart

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart(); // Clears the cart
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Your Cart</h2>
        
        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-700">Your cart is empty.</p>
        ) : (
          <div className="space-y-8">
            {cart.map((watch) => (
              <div key={watch.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{watch.name}</h3>
                  <p className="text-xl font-bold text-gray-800">${watch.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(watch.id)}
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-4">
            <button
              onClick={handleClearCart}
              className="text-red-600 hover:text-red-800 transition duration-300"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
