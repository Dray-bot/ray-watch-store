import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';

// Newly added pages
import TrackOrder from './pages/TrackOrder';
import FAQs from './pages/FAQs';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturedProducts />
                <About />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Shop Route */}
          <Route path="/shop" element={<Shop />} />

          {/* Product Page Route */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout Route */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Order Confirmation Route */}
          <Route path="/order-confirmation" element={<OrderConfirmation />} />

          {/* Track Order Route */}
          <Route path="/track-order" element={<TrackOrder />} />

          {/* FAQs Route */}
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
