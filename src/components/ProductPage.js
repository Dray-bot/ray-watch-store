import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useStore from '../store';

const ProductPage = () => {
  const { id } = useParams();  // Get product ID from URL
  const { cart, addToCart } = useStore();  // Zustand state
  const products = [
    // Product data
    {
      id: 1,
      name: 'Rolex Submariner',
      price: 15000,
      description: 'The Rolex Submariner is a timeless luxury watch designed for divers and admired by collectors worldwide. It features a robust stainless steel case, a unidirectional rotating bezel, and water resistance up to 300 meters.',
      image: 'https://www.prestonsdiamonds.co.uk/storage/rolex/model_gallery_assets_portrait/slide3/m126619lb-0003.webp',
    },
    {
      id: 2,
      name: 'Omega Seamaster',
      price: 7000,
      description: 'The Omega Seamaster is a legendary dive watch that blends precision with iconic style. It is equipped with a helium escape valve and a co-axial escapement for enhanced performance.',
      image: 'https://swisswatches-magazine.com/wp-content/uploads/2024/12/omega-seamaster-diver-300m-in-titanium-and-bronze-gold-dial.webp',
    },
    {
      id: 3,
      name: 'Casio F91W',
      price: 50,
      description: 'The Casio F91W is a classic digital watch that is lightweight, reliable, and affordable. It features a stopwatch, alarm, and water resistance, making it a practical everyday choice.',
      image: 'https://kevquirk.com/media/pages/blog/why-the-casio-f-91w-is-the-best-watch-ever-made/57d7fcfc4d-1723205404/f91w-black-bg.webp',
    },
    {
      id: 4,
      name: 'Patek Philippe Nautilus',
      price: 32000,
      description: 'The Patek Philippe Nautilus is a highly sought-after luxury watch known for its distinctive design and craftsmanship. It features a stainless steel case and bracelet, along with an elegant blue dial.',
      image: 'https://amsterdamvintagewatches.com/wp-content/uploads/attachments/Patek-Philippe-3700J-3-2-1600x1600.jpg',
    },
    {
      id: 5,
      name: 'TAG Heuer Carrera',
      price: 6000,
      description: 'The TAG Heuer Carrera is a stylish sports watch with a rich motorsport heritage. It features a chronograph function and a sleek design that appeals to racing enthusiasts.',
      image: 'https://cdn.shopify.com/s/files/1/0025/2329/9889/files/Bulang-and-Sons_Strap-guide_Heuer-Carrera-Automatic_Cosaro-Brown-Retro-Leather-Watch-Strap.jpg',
    },
    {
      id: 6,
      name: 'Daniel Wellington Classic',
      price: 120,
      description: 'The Daniel Wellington Classic offers minimalist design and versatility, perfect for any occasion. Its slim profile and interchangeable straps make it a popular choice.',
      image: 'https://image-resizing.booztcdn.com/daniel-wellington/dwndw00100133_csilver_2.webp?has_grey=1&has_webp=1&dpr=2.5&size=w400',
    },
    {
      id: 7,
      name: 'Tissot PRX',
      price: 650,
      description: 'The Tissot PRX is a sharp-looking Swiss quartz watch with a retro vibe, combining elegance and practicality. It features a stainless steel bracelet and a textured dial.',
      image: 'https://cdn.accentuate.io/41565765238850/2755981672514/Tissot-PRX-Tiffany35-WR-01_crop-v1722434074227.jpg?960x986&transform=resize=900',
    },
    {
      id: 8,
      name: 'G-Shock GA-2100',
      price: 130,
      description: 'The G-Shock GA-2100 is a tough, shock-resistant watch with a sleek design. Its carbon core guard structure ensures durability, while its minimalist look appeals to modern tastes.',
      image: 'https://fathyibrahim.com/wp-content/uploads/2022/03/GA-2100-1ADR3.jpg',
    },
    {
      id: 9,
      name: 'Audemars Piguet Royal Oak',
      price: 45000,
      description: 'The Audemars Piguet Royal Oak is an iconic luxury watch known for its unique octagonal bezel and premium craftsmanship. It features a "tapisserie" patterned dial and integrated bracelet.',
      image: 'https://www.thestore.ae/wp-content/uploads/2024/11/Pre-owned-Audemars-Piguet-Royal-Oak-Frosted-Gold-Chronograph-White-Gold-Limited-Edition-26239BC.GG_.1224BC-2-scaled.jpeg',
    },
    {
      id: 10,
      name: 'Seiko 5 Sports',
      price: 300,
      description: 'The Seiko 5 Sports is a durable and reliable automatic watch with an affordable price tag. It features a day-date display and a sporty design suitable for everyday wear.',
      image: 'https://www.hodinky-365.com/fotky/orig/f188/seiko-5-sports-automatic-srpg35k1-field_213100_304181.jpg',
    },
    {
      id: 11,
      name: 'Citizen Eco-Drive',
      price: 400,
      description: 'The Citizen Eco-Drive runs on solar power, making it eco-friendly while offering precision and style. It eliminates the need for battery replacements.',
      image: 'https://hodinkee.imgix.net/uploads/images/1549313786506-18ire76roooj-6a2eca1ce1203dfbd48098033285d889/729A0193.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12',
    },
    {
      id: 12,
      name: 'Longines HydroConquest',
      price: 1400,
      description: 'The Longines HydroConquest is a high-quality dive watch that merges elegance with outstanding performance. It features a ceramic bezel and water resistance up to 300 meters.',
      image: 'https://hodinkee.imgix.net/uploads/images/1582129027336-ejytak5k4vl-c03b6c9b068eb9a42bfcc09eb2338fca/Longines1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12',
    },
    {
      id: 13,
      name: 'Cartier Tank Solo',
      price: 25000,
      description: 'The Cartier Tank Solo is a timeless piece with a rectangular case and elegant design, perfect for formal wear. It embodies the sophistication of the Cartier brand.',
      image: 'https://www.analogshift.com/cdn/shop/files/AS09087_40950230_CARTIER_TANKSOLOLARGEYELLOWGOLDCAPPED_W5200004-3167-6.jpg',
    },
    {
      id: 14,
      name: 'Swatch Originals',
      price: 90,
      description: 'The Swatch Originals collection offers fun, colorful designs for casual everyday wear. These watches are lightweight, affordable, and highly customizable.',
      image: 'https://watchesforwomenbrands.com/cdn/shop/products/20220315_153700_grande.jpg?v=1647522285',
    },
    {
      id: 15,
      name: 'Hublot Big Bang',
      price: 28000,
      description: 'The Hublot Big Bang is a statement piece with bold design and luxurious materials, perfect for those who love extravagance. It features a fusion of innovative materials and craftsmanship.',
      image: 'https://img.chrono24.com/images/uhren/38259938-l7j01snc9zn5n2tn7x2s85tr-ExtraLarge.jpg',
    },
    {
      id: 16,
      name: 'Bulgari Octo Finissimo',
      price: 15000,
      description: 'The Bulgari Octo Finissimo features a stunningly thin profile and a contemporary design that blends style and innovation. It is a masterpiece of modern watchmaking.',
      image: 'https://revolutionwatch.com/wp-content/uploads/2020/10/05-Bulgari-Octo-Finissimo-Chronograph-GMT_White-Light.jpg',
    },
    {
      id: 17,
      name: 'Apple Watch Series 9',
      price: 400,
      description: 'The Apple Watch Series 9 is a versatile smartwatch with advanced health tracking, communication, and entertainment features. It integrates seamlessly with the Apple ecosystem.',
      image: 'https://media.dcrainmaker.com/images/2023/09/Apple-Watch-Series9-Mainapps.jpg',
    },
    {
      id: 18,
      name: 'Garmin Fenix 7',
      price: 600,
      description: 'The Garmin Fenix 7 is a rugged GPS smartwatch designed for outdoor enthusiasts, offering durability and multi-sport tracking. It includes advanced navigation and fitness features.',
      image: 'https://shop.stgeorgerunningcenter.com/images/1575/10_113_1642609710034.jpg',
    },
    {
      id: 19,
      name: 'Nixon Time Teller',
      price: 125,
      description: 'The Nixon Time Teller is a casual and minimalist watch that offers both style and functionality. Its clean design makes it a versatile accessory for any outfit.',
      image: 'https://www.karmanow.co.za/cdn/shop/products/Nixon-Time-Teller-Watch-for-Men-A045-000-00__2_cf9d8cd0-fc90-411e-a3cf-594eb229558d_600x.jpg?v=1711623728',
    },
    {
      id: 20,
      name: 'Breitling Navitimer',
      price: 8000,
      description: 'The Breitling Navitimer is an iconic aviation watch with a rich history and sophisticated features. It includes a slide rule bezel for performing flight calculations.',
      image: 'https://www.ceo-middleeast.com/wp-content/uploads/sites/10/cloud/2023/02/10/Breitling-Navitimer-B01-SWISS-Limited-Edition-2.jpg',
    },
    // Other products...
  ];

  // Find the product by ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;  // Display if product doesn't exist
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-96 h-96 object-cover rounded-lg mb-6 md:mb-0"
        />
        <div className=" justify-between">
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-4">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-[#6B4F31] text-white py-2 px-4 rounded-md hover:bg-[#6B4F31] focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
          >
            Add to Cart
          </button>
          <div className="mt-4">
            <Link to="/cart" className="text-[#6B4F31] hover:underline">
            Go to cart ({cart.length} items)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
