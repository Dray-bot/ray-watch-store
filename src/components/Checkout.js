import React, { useState } from 'react';
import useStore from '../store';
import { useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useStore();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can connect to backend/payment system here later
    alert('✅ Order placed successfully!');
    navigate('/order-confirmation');
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          <p>Your cart is empty 😅</p>
          <Link
            to="/shop"
            className="text-emerald-600 font-medium underline hover:text-emerald-700 transition"
          >
            Go shopping
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-sm"
        >
          {/* Left: Shipping Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Info</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Ola Watch"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="olawatchstore@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="123 Main St, Lagos"
                  required
                />
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-gray-600 text-sm">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-emerald-600 text-xl">${totalPrice.toLocaleString()}</span>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Confirm Order
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
