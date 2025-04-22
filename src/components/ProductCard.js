import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react'; // Lucide icon for extra spice

const ProductCard = ({ watch }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        <img
          src={watch.image}
          alt={watch.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900">{watch.name}</h3>
        <p className="text-lg font-bold text-emerald-600 mt-1">${watch.price.toLocaleString()}</p>

        {/* You can add tags/categories here later */}
      </div>

      {/* CTA */}
      <Link
        to={`/product/${watch.id}`}
        className="mt-4 flex items-center justify-center gap-2 bg-amber-400 text-gray-900 font-medium py-2 px-4 rounded-full hover:bg-amber-500 transition"
      >
        <Eye className="w-5 h-5" />
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
