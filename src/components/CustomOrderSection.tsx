
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
    deadline: '',
    budget: '',
    reference: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        reference: e.target.files[0]
      });
    }
  };

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm interested in a custom painting from Arvishwa Studio!

📝 ORDER DETAILS:
Name: ${formData.name}
Email: ${formData.email}

🎨 ARTWORK DESCRIPTION:
${formData.description}

📏 SPECIFICATIONS:
Size: ${formData.size}
Medium: ${formData.medium}
Deadline: ${formData.deadline}
Budget: ${formData.budget}

Please provide a quote and timeline for this custom order.

Thank you!`;

    // Create email content
    const subject = encodeURIComponent('Custom Art Order Request - Arvishwa Studio');
    const emailBody = encodeURIComponent(`Hello Arvishwa Studio,

I would like to request a custom art order with the following details:

ORDER DETAILS:
Name: ${formData.name}
Email: ${formData.email}

ARTWORK DESCRIPTION:
${formData.description}

SPECIFICATIONS:
- Size: ${formData.size}
- Medium: ${formData.medium}
- Preferred Deadline: ${formData.deadline}
- Budget Range: ${formData.budget}

Please get back to me with a quote and timeline.

Best regards,
${formData.name}`);

    // Send to WhatsApp instantly
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Send to email instantly
    window.location.href = `mailto:hello@arvishwastudio.com?subject=${subject}&body=${emailBody}`;

    // Reset form
    setFormData({
      name: '',
      email: '',
      description: '',
      size: '',
      medium: '',
      deadline: '',
      budget: '',
      reference: null
    });

    // Show success message
    alert('Your request has been sent instantly via WhatsApp and Email! We\'ll respond within 24 hours.');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Custom <span className="text-orange-500">Art Orders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your vision into reality. Commission a one-of-a-kind masterpiece 
            tailored specifically to your taste and space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Order Form */}
          <Card className="p-8 shadow-xl bg-white">
            <form onSubmit={handleSendRequest} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Tell Us Your Vision</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Vision *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your dream painting... colors, mood, subjects, style preferences..."
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Canvas Size</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select size</option>
                    <option value="16x20 inches">Small (16"x20")</option>
                    <option value="24x30 inches">Medium (24"x30")</option>
                    <option value="36x48 inches">Large (36"x48")</option>
                    <option value="custom">Custom Size</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medium</label>
                  <select
                    name="medium"
                    value={formData.medium}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select medium</option>
                    <option value="Oil Paint">Oil Paint</option>
                    <option value="Watercolor">Watercolor</option>
                    <option value="Acrylic">Acrylic</option>
                    <option value="Mixed Media">Mixed Media</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Deadline</label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget</option>
                    <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reference Image (Optional)</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
                <p className="text-sm text-gray-500 mt-1">Upload any reference images for inspiration</p>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg"
              >
                Send Request Instantly 🚀
              </Button>
            </form>
          </Card>

          {/* Info Panel */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
              <h3 className="text-xl font-bold mb-4">⚡ Instant Communication</h3>
              <p className="text-orange-100 mb-4">
                Your request will be sent immediately via WhatsApp and Email. No waiting, no delays!
              </p>
              <ul className="text-orange-100 space-y-2 text-sm">
                <li>• Instant WhatsApp message to artist</li>
                <li>• Automatic email confirmation</li>
                <li>• Response within 24 hours</li>
                <li>• Detailed quote and timeline</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 What Happens Next?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">1.</span>
                  We review your request within 24 hours
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">2.</span>
                  Detailed quote and timeline provided
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">3.</span>
                  Initial sketches shared for approval
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">4.</span>
                  Regular progress updates throughout
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">5.</span>
                  Secure delivery to your doorstep
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-green-50">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💎 Why Choose Custom Art?</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Unique piece designed just for you</li>
                <li>• Perfect fit for your space and style</li>
                <li>• Certificate of authenticity included</li>
                <li>• Investment in original artwork</li>
                <li>• Personal connection with the artist</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderSection;
