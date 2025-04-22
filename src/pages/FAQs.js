import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqsData = [
  {
    question: '🕰️ What brands do you offer?',
    answer: 'We stock premium brands like Rolex, Omega, Patek Philippe, and more.',
  },
  {
    question: '🚚 How long does delivery take?',
    answer: 'Delivery takes 3–7 business days within Nigeria.',
  },
  {
    question: '📦 What’s your return policy?',
    answer: 'We offer a 7-day return window for all unworn items.',
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-[#6B4F31] text-center">Frequently Asked Questions</h2>

      <div className="space-y-6">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 font-medium text-[#1F2937] flex justify-between items-center hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
