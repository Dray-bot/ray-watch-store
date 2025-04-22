import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!orderId.trim()) {
      setError('Please enter a valid Order ID.');
      setStatus(null);
      return;
    }

    setError('');
    
    // Simulate order lookup
    setTimeout(() => {
      setStatus(`📦 Order #${orderId.toUpperCase()} is currently being processed.`);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-20 px-6 text-center bg-[#F3F4F6]">
      <h2 className="text-4xl font-bold mb-4 text-[#6B4F31]">Track Your Order</h2>
      <p className="text-gray-600 mb-8">Enter your order ID to see your shipping status.</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Order ID"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
        />
        <button
          type="submit"
          className="w-full bg-[#6B4F31] text-white py-3 rounded-md hover:bg-[#5a3f27] transition"
        >
          Track Order
        </button>
      </form>

      {error && (
        <motion.p
          className="mt-4 text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}

      {status && (
        <motion.div
          className="mt-6 bg-white p-4 rounded-lg shadow-md text-[#1F2937]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {status}
        </motion.div>
      )}
    </div>
  );
};

export default TrackOrder;
