import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Rolex Submariner", price: 15000, image: "https://www.prestonsdiamonds.co.uk/storage/rolex/model_gallery_assets_portrait/slide3/m126619lb-0003.webp" },
    { id: 2, name: "Omega Seamaster", price: 7000, image: "https://swisswatches-magazine.com/wp-content/uploads/2024/12/omega-seamaster-diver-300m-in-titanium-and-bronze-gold-dial.webp" },
    { id: 3, name: "Casio F91W", price: 50, image: "https://kevquirk.com/media/pages/blog/why-the-casio-f-91w-is-the-best-watch-ever-made/57d7fcfc4d-1723205404/f91w-black-bg.webp" },
  ];

  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#6B4F31]">Featured Timepieces</h2>
        <p className="text-[#7C6F60] mt-2">Exquisite picks from top brands</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#1F2937]">{product.name}</h3>
            <p className="text-[#EAB308] text-lg mt-1">${product.price.toLocaleString()}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-4 inline-block bg-[#6B4F31] text-white py-2 px-4 rounded-md hover:bg-[#6B4F31] transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
