
import React, { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I place a custom order?",
    answer: "Simply fill out our custom order form with your vision, preferred size, and timeline. We'll send you a detailed quote within 24 hours and start with initial sketches for your approval.",
    icon: "🎨"
  },
  {
    id: 2,
    question: "What about framing and delivery?",
    answer: "We offer professional framing services and secure packaging. Delivery within Mumbai is free for orders above ₹10,000. For other cities, we use trusted courier services with insurance coverage.",
    icon: "📦"
  },
  {
    id: 3,
    question: "How long does a custom painting take?",
    answer: "Custom paintings typically take 2-4 weeks depending on size and complexity. Rush orders can be accommodated for an additional fee. We'll provide regular progress updates throughout the creation process.",
    icon: "⏰"
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: "We accept UPI, bank transfers, credit/debit cards, and cash on delivery (within Mumbai). For custom orders, we require 50% advance payment to begin work.",
    icon: "💳"
  },
  {
    id: 5,
    question: "Do you provide certificates of authenticity?",
    answer: "Yes! Every original painting comes with a signed certificate of authenticity, including details about the artwork, creation date, and artist signature. This ensures the value and provenance of your investment.",
    icon: "📜"
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ordering and owning original artwork
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{faq.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <span
                  className={`text-orange-500 text-xl transition-transform duration-200 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <div className="pl-12">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-orange-100 mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <button 
              onClick={() => {
                const message = "Hello! I have a question about Arvishwa Studio artwork.";
                window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Ask on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
