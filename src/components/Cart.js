import React from 'react';
import useStore from '../store';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart } = useStore();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          <p>Your cart is empty 😔</p>
          <Link to="/shop" className="text-emerald-600 font-medium underline mt-2 inline-block hover:text-emerald-700 transition">
            Browse watches
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                  <p className="text-gray-600 mt-1">${product.price.toLocaleString()}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
          ))}

          {/* Total & CTA */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <span>Total:</span>
              <span className="text-emerald-600 text-2xl font-bold">
                ${totalPrice.toLocaleString()}
              </span>
            </div>

            <Link
              to="/checkout"
              className="mt-6 inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
