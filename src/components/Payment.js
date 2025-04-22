// src/components/Payment.js
import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store';

const Payment = () => {
  const { cart } = useStore();

  // Calculate dynamic total
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">💳 Payment</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <div className="text-lg text-gray-700">
          <p>Total Items: <span className="font-semibold">{cart.length}</span></p>
          <p>Total Amount: <span className="font-bold text-green-600">${totalAmount.toFixed(2)}</span></p>
        </div>

        {/* Future payment gateway section */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">*Note: This is a test payment page. You can integrate Stripe, Paystack, or Flutterwave later.</p>
        </div>

        <Link to="/order-confirmation">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-lg">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
