import React from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store';
import { ShoppingCart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useStore();

  const products = [
    {
      id: 1,
      name: 'Rolex Submariner',
      price: 15000,
      description: 'The Rolex Submariner is a timeless luxury watch designed for divers and admired by collectors worldwide.',
      image: 'https://www.prestonsdiamonds.co.uk/storage/rolex/model_gallery_assets_portrait/slide3/m126619lb-0003.webp',
    },
    {
      id: 2,
      name: 'Omega Seamaster',
      price: 7000,
      description: 'The Omega Seamaster is a legendary dive watch that blends precision with iconic style.',
      image: '/images/omega.jpg',
    },
    {
      id: 3,
      name: 'Casio F91W',
      price: 50,
      description: 'The Casio F91W is a classic digital watch that is lightweight, reliable, and affordable.',
      image: '/images/casio.jpg',
    },
    {
      id: 4,
      name: 'Patek Philippe Nautilus',
      price: 32000,
      description: 'The Patek Philippe Nautilus is a highly sought-after luxury watch known for its distinctive design and craftsmanship.',
      image: '/images/patek.jpg',
    },
    {
      id: 5,
      name: 'TAG Heuer Carrera',
      price: 6000,
      description: 'The TAG Heuer Carrera is a stylish sports watch with a rich motorsport heritage.',
      image: '/images/tag.jpg',
    },
    {
      id: 6,
      name: 'Daniel Wellington Classic',
      price: 120,
      description: 'The Daniel Wellington Classic offers minimalist design and versatility, perfect for any occasion.',
      image: '/images/dw.jpg',
    },
    {
      id: 7,
      name: 'Tissot PRX',
      price: 650,
      description: 'The Tissot PRX is a sharp-looking Swiss quartz watch with a retro vibe, combining elegance and practicality.',
      image: '/images/tissot.jpg',
    },
    {
      id: 8,
      name: 'G-Shock GA-2100',
      price: 130,
      description: 'The G-Shock GA-2100 is a tough, shock-resistant watch with a sleek design.',
      image: '/images/gshock.jpg',
    },
    {
      id: 9,
      name: 'Audemars Piguet Royal Oak',
      price: 45000,
      description: 'The Audemars Piguet Royal Oak is an iconic luxury watch known for its unique octagonal bezel and premium craftsmanship.',
      image: '/images/ap.jpg',
    },
    {
      id: 10,
      name: 'Seiko 5 Sports',
      price: 300,
      description: 'The Seiko 5 Sports is a durable and reliable automatic watch with an affordable price tag.',
      image: '/images/seiko.jpg',
    },
    {
      id: 11,
      name: 'Citizen Eco-Drive',
      price: 400,
      description: 'The Citizen Eco-Drive runs on solar power, making it eco-friendly while offering precision and style.',
      image: '/images/citizen.jpg',
    },
    {
      id: 12,
      name: 'Longines HydroConquest',
      price: 1400,
      description: 'The Longines HydroConquest is a high-quality dive watch that merges elegance with outstanding performance.',
      image: '/images/longines.jpg',
    },
    {
      id: 13,
      name: 'Cartier Tank Solo',
      price: 25000,
      description: 'The Cartier Tank Solo is a timeless piece with a rectangular case and elegant design, perfect for formal wear.',
      image: '/images/cartier.jpg',
    },
    {
      id: 14,
      name: 'Swatch Originals',
      price: 90,
      description: 'The Swatch Originals collection offers fun, colorful designs for casual everyday wear.',
      image: '/images/swatch.jpg',
    },
    {
      id: 15,
      name: 'Hublot Big Bang',
      price: 28000,
      description: 'The Hublot Big Bang is a statement piece with bold design and luxurious materials, perfect for those who love extravagance.',
      image: '/images/hublot.jpg',
    },
    {
      id: 16,
      name: 'Bulgari Octo Finissimo',
      price: 15000,
      description: 'The Bulgari Octo Finissimo features a stunningly thin profile and a contemporary design that blends style and innovation.',
      image: '/images/bulgari.jpg',
    },
    {
      id: 17,
      name: 'Apple Watch Series 9',
      price: 400,
      description: 'The Apple Watch Series 9 is a versatile smartwatch with advanced health tracking, communication, and entertainment features.',
      image: '/images/apple.jpg',
    },
    {
      id: 18,
      name: 'Garmin Fenix 7',
      price: 600,
      description: 'The Garmin Fenix 7 is a rugged GPS smartwatch designed for outdoor enthusiasts, offering durability and multi-sport tracking.',
      image: '/images/garmin.jpg',
    },
    {
      id: 19,
      name: 'Nixon Time Teller',
      price: 125,
      description: 'The Nixon Time Teller is a casual and minimalist watch that offers both style and functionality.',
      image: '/images/nixon.jpg',
    },
    {
      id: 20,
      name: 'Breitling Navitimer',
      price: 8000,
      description: 'The Breitling Navitimer is an iconic aviation watch with a rich history and sophisticated features.',
      image: '/images/breitling.jpg',
    },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-8 text-center text-xl font-medium text-red-600">
        Product not found 💔
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl text-emerald-600 font-semibold mt-2">
            ${product.price.toLocaleString()}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
