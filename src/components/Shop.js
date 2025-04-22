import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store';

const products = [
  { id: 1, name: 'Rolex Submariner', price: 15000, image: 'https://www.prestonsdiamonds.co.uk/storage/rolex/model_gallery_assets_portrait/slide3/m126619lb-0003.webp', category: 'Luxury', tag: '🔥 Hot' },
  { id: 2, name: 'Omega Seamaster', price: 7000, image: 'https://swisswatches-magazine.com/wp-content/uploads/2024/12/omega-seamaster-diver-300m-in-titanium-and-bronze-gold-dial.webp', category: 'Sports', tag: '💎 Limited Edition' },
  { id: 3, name: 'Casio F91W', price: 50, image: 'https://kevquirk.com/media/pages/blog/why-the-casio-f-91w-is-the-best-watch-ever-made/57d7fcfc4d-1723205404/f91w-black-bg.webp', category: 'Casual' },
  { id: 4, name: 'Patek Philippe Nautilus', price: 32000, image: 'https://amsterdamvintagewatches.com/wp-content/uploads/attachments/Patek-Philippe-3700J-3-2-1600x1600.jpg', category: 'Luxury', tag: '🔥 Hot' },
  { id: 5, name: 'TAG Heuer Carrera', price: 6000, image: 'https://cdn.shopify.com/s/files/1/0025/2329/9889/files/Bulang-and-Sons_Strap-guide_Heuer-Carrera-Automatic_Cosaro-Brown-Retro-Leather-Watch-Strap.jpg', category: 'Sports' },
  { id: 6, name: 'Daniel Wellington Classic', price: 120, image: 'https://image-resizing.booztcdn.com/daniel-wellington/dwndw00100133_csilver_2.webp?has_grey=1&has_webp=1&dpr=2.5&size=w400', category: 'Casual', tag: '🆕 New Arrival' },
  { id: 7, name: 'Tissot PRX', price: 650, image: 'https://cdn.accentuate.io/41565765238850/2755981672514/Tissot-PRX-Tiffany35-WR-01_crop-v1722434074227.jpg?960x986&transform=resize=900', category: 'Casual' },
  { id: 8, name: 'G-Shock GA-2100', price: 130, image: 'https://fathyibrahim.com/wp-content/uploads/2022/03/GA-2100-1ADR3.jpg', category: 'Sports', tag: '🔥 Hot' },
  { id: 9, name: 'Audemars Piguet Royal Oak', price: 45000, image: 'https://www.thestore.ae/wp-content/uploads/2024/11/Pre-owned-Audemars-Piguet-Royal-Oak-Frosted-Gold-Chronograph-White-Gold-Limited-Edition-26239BC.GG_.1224BC-2-scaled.jpeg', category: 'Luxury', tag: '💎 Limited Edition' },
  { id: 10, name: 'Seiko 5 Sports', price: 300, image: 'https://www.hodinky-365.com/fotky/orig/f188/seiko-5-sports-automatic-srpg35k1-field_213100_304181.jpg', category: 'Sports', tag: '🆕 New Arrival' },
  { id: 11, name: 'Citizen Eco-Drive', price: 400, image: 'https://hodinkee.imgix.net/uploads/images/1549313786506-18ire76roooj-6a2eca1ce1203dfbd48098033285d889/729A0193.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12', category: 'Casual' },
  { id: 12, name: 'Longines HydroConquest', price: 1400, image: 'https://hodinkee.imgix.net/uploads/images/1582129027336-ejytak5k4vl-c03b6c9b068eb9a42bfcc09eb2338fca/Longines1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12', category: 'Luxury' },
  { id: 13, name: 'Cartier Tank Solo', price: 25000, image: 'https://www.analogshift.com/cdn/shop/files/AS09087_40950230_CARTIER_TANKSOLOLARGEYELLOWGOLDCAPPED_W5200004-3167-6.jpg', category: 'Luxury' },
  { id: 14, name: 'Swatch Originals', price: 90, image: 'https://watchesforwomenbrands.com/cdn/shop/products/20220315_153700_grande.jpg?v=1647522285', category: 'Casual', tag: '🆕 New Arrival' },
  { id: 15, name: 'Hublot Big Bang', price: 28000, image: 'https://img.chrono24.com/images/uhren/38259938-l7j01snc9zn5n2tn7x2s85tr-ExtraLarge.jpg', category: 'Luxury', tag: '🔥 Hot' },
  { id: 16, name: 'Bulgari Octo Finissimo', price: 15000, image: 'https://revolutionwatch.com/wp-content/uploads/2020/10/05-Bulgari-Octo-Finissimo-Chronograph-GMT_White-Light.jpg', category: 'Luxury' },
  { id: 17, name: 'Apple Watch Series 9', price: 400, image: 'https://media.dcrainmaker.com/images/2023/09/Apple-Watch-Series9-Mainapps.jpg', category: 'Sports', tag: '🆕 New Arrival' },
  { id: 18, name: 'Garmin Fenix 7', price: 600, image: 'https://shop.stgeorgerunningcenter.com/images/1575/10_113_1642609710034.jpg', category: 'Sports' },
  { id: 19, name: 'Nixon Time Teller', price: 125, image: 'https://www.karmanow.co.za/cdn/shop/products/Nixon-Time-Teller-Watch-for-Men-A045-000-00__2_cf9d8cd0-fc90-411e-a3cf-594eb229558d_600x.jpg?v=1711623728', category: 'Casual', tag: '💎 Limited Edition' },
  { id: 20, name: 'Breitling Navitimer', price: 8000, image: 'https://www.ceo-middleeast.com/wp-content/uploads/sites/10/cloud/2023/02/10/Breitling-Navitimer-B01-SWISS-Limited-Edition-2.jpg', category: 'Luxury', tag: '🔥 Hot' },
];

const Shop = () => {
  const { addToCart } = useStore();

  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const filterAndSortProducts = () => {
    let result = [...products];

    // Filters
    if (category) result = result.filter((p) => p.category === category);
    if (minPrice !== '') result = result.filter((p) => p.price >= parseFloat(minPrice));
    if (maxPrice !== '') result = result.filter((p) => p.price <= parseFloat(maxPrice));
    if (tagFilter) result = result.filter((p) => p.tag === tagFilter);

    // Sorting
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);

    return result;
  };

  const filteredProducts = filterAndSortProducts();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800"> Shop Watches</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10">
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="border px-4 py-2 rounded-md bg-white shadow-sm"
        >
          <option value="">All Categories</option>
          <option value="Luxury">Luxury</option>
          <option value="Sports">Sports</option>
          <option value="Casual">Casual</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          className="border px-4 py-2 rounded-md shadow-sm"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border px-4 py-2 rounded-md shadow-sm"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          className="border px-4 py-2 rounded-md bg-white shadow-sm"
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>

        {/* Tag Filter */}
        <select
          onChange={(e) => setTagFilter(e.target.value)}
          value={tagFilter}
          className="border px-4 py-2 rounded-md bg-white shadow-sm"
        >
          <option value="">All Tags</option>
          <option value="🔥 Hot">Hot</option>
          <option value="💎 Limited Edition">Limited Edition</option>
          <option value="🆕 New Arrival">New Arrival</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              {/* Tag */}
              {product.tag && (
                <span className="absolute top-2 left-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full shadow-sm z-10">
                  {product.tag}
                </span>
              )}

              <div className="w-full h-60 bg-gray-100 rounded-md overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-lg mb-4">${product.price.toLocaleString()}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-[#6B4F31] text-white py-2 px-4 rounded-md hover:bg-[#5a3f27] transition"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="flex-1 text-center bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full text-center">No products match the filters.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;








