// Testimonials Section
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Absolutely love my new Rolex! Flawless quality and amazing service.",
      name: "John Doe",
    },
    {
      quote: "Fast delivery, authentic product, and super smooth shopping experience!",
      name: "Jane Smith",
    },
    {
      quote: "Luxury watches at their finest. Will definitely shop again.",
      name: "Michael Lee",
    },
  ];

  return (
    <section className="py-20 bg-[#FDFBF7] text-[#1F2937] px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#6B4F31]">What Our Customers Say</h2>
        <p className="text-[#7C6F60] mt-2">Real reviews from real luxury lovers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white border border-[#EDEDED] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-[#5C5C5C] italic mb-4">“{testimonial.quote}”</p>
            <p className="text-lg font-semibold text-[#6B4F31]">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
