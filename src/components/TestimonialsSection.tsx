
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    message: "The painting I commissioned for my living room has become the centerpiece of our home. Arvishwa captured exactly what I envisioned!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b96c?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Gupta",
    location: "Delhi",
    message: "Outstanding quality and attention to detail. The colors are so vibrant and the artwork speaks to my soul every day.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bangalore",
    message: "Professional service from start to finish. The custom portrait of my family is absolutely beautiful and will be treasured forever.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Pune",
    message: "The abstract piece I bought has transformed my office space. Clients always comment on how inspiring and beautiful it is.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-orange-500">Collectors Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from art lovers who have transformed their spaces with our paintings
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Message */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="text-center mt-8 md:hidden">
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 w-max mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={`mobile-${testimonial.id}`}
                  className="flex-none w-80 bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
