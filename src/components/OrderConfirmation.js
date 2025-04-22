import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../store';

const OrderConfirmation = () => {
  const { cart, clearCart } = useStore(); // Zustand state
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  useEffect(() => {
    if (cart.length > 0) {
      clearCart(); // Auto clear cart after order placed
    }
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">🎉 Order Confirmed!</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">Your order has been placed successfully!</p>
          <p className="text-gray-500 mb-4">You'll receive a confirmation email shortly.</p>
          <Link
            to="/shop"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <p className="text-xl mb-4">Thanks for your order! Here's what you got:</p>

          <div className="space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold text-right">Total Paid: ${totalPrice}</h2>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/shop"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
