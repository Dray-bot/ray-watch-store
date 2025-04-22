import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setTimeout(() => {
      setLoading(false);
      setStatus({ type: 'success', message: 'Thank you for reaching out! We’ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#6B4F31] text-center mb-6">Contact Us</h2>
        <p className="text-lg text-[#555] max-w-2xl mx-auto text-center mb-12">
          Have questions or need help? Fill out the form or reach us directly. We're here to assist!
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE: Store Info + Map */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#6B4F31] mb-4">Store Information</h3>
              <ul className="text-[#333] space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="text-[#6B4F31]" />
                  27 Idumagbo Ave, Lagos Island 102273, Lagos, Nigeria
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#6B4F31]" />
                  +243 916 011 0083
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-[#6B4F31]" />
                  rasheedamusan5@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-[#6B4F31]" />
                  Mon - Sat: 9:00AM - 4:00PM
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#6B4F31] mb-3">Store Location</h3>
              <div className="rounded-lg overflow-hidden">
                <MapContainer
                  center={[40.748817, -73.985428]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: '300px', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                  />
                  <Marker position={[40.748817, -73.985428]}>
                    <Popup>123 WatchStreet, CityName</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            {status && (
              <div className={`mb-6 p-4 text-lg rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-lg text-[#333] font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-lg text-[#333] font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-lg text-[#333] font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#6B4F31] text-white text-lg font-semibold py-3 px-6 rounded-md transition disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
