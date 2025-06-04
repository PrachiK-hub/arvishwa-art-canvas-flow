
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CustomOrderSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    size: '',
    medium: '',
    theme: '',
    deadline: '',
    budget: ''
  });

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom order submitted:', formData);
    // Handle form submission here
  };

  const sampleWorks = [
    {
      title: "Custom Portrait",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Oil on canvas portrait"
    },
    {
      title: "Landscape Commission",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      description: "Custom landscape painting"
    },
    {
      title: "Abstract Creation",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      description: "Modern abstract piece"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-canvas-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-purple-900 mb-6">
            Custom <span className="text-gradient font-brush">Art Orders</span>
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Transform your vision into reality. Commission a one-of-a-kind masterpiece 
            tailored specifically to your taste and space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Order Form */}
          <div className="order-2 lg:order-1">
            <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-purple-700">Step {step} of {totalSteps}</span>
                  <span className="text-sm font-medium text-purple-700">{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-saffron-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">Tell Us About You</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">Describe Your Vision *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your dream painting... What do you envision? Colors, mood, subjects, style preferences?"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Art Specifications */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">Art Specifications</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-purple-700 mb-2">Canvas Size</label>
                        <select
                          name="size"
                          value={formData.size}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select size</option>
                          <option value="small">Small (16"x20")</option>
                          <option value="medium">Medium (24"x30")</option>
                          <option value="large">Large (36"x48")</option>
                          <option value="custom">Custom Size</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-purple-700 mb-2">Medium</label>
                        <select
                          name="medium"
                          value={formData.medium}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select medium</option>
                          <option value="oil">Oil Paint</option>
                          <option value="watercolor">Watercolor</option>
                          <option value="acrylic">Acrylic</option>
                          <option value="digital">Digital Art</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">Theme/Style</label>
                      <select
                        name="theme"
                        value={formData.theme}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select theme</option>
                        <option value="portrait">Portrait</option>
                        <option value="landscape">Landscape</option>
                        <option value="abstract">Abstract</option>
                        <option value="realistic">Realistic</option>
                        <option value="modern">Modern</option>
                        <option value="traditional">Traditional</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Timeline & Budget */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">Timeline & Investment</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">Preferred Deadline</label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">What happens next?</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• We'll review your request within 24 hours</li>
                        <li>• A detailed quote and timeline will be provided</li>
                        <li>• Initial sketches shared for your approval</li>
                        <li>• Regular progress updates throughout creation</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={step === 1}
                    className="px-6 py-2 border-purple-300 text-purple-700 hover:bg-purple-50 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  
                  {step < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-saffron-500 hover:from-purple-700 hover:to-saffron-600 text-white"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="px-8 py-2 bg-gradient-to-r from-purple-600 to-saffron-500 hover:from-purple-700 hover:to-saffron-600 text-white font-semibold"
                    >
                      Submit Request ✨
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* Sample Works Showcase */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Previous Custom Works</h3>
              <div className="space-y-6">
                {sampleWorks.map((work, index) => (
                  <Card key={index} className="overflow-hidden hover-tilt transition-all duration-300 hover:shadow-xl">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-purple-900 mb-1">{work.title}</h4>
                      <p className="text-purple-600 text-sm">{work.description}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-purple-600 to-saffron-500 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-2">💡 Need Inspiration?</h4>
                <p className="text-purple-100 mb-4">
                  Not sure what you want? Browse our portfolio or schedule a consultation call!
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderSection;
