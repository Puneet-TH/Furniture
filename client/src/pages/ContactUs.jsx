import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { sendEnquiryEmail } from '../api/email';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        'Plot no C-170/71',
        'Focal point patiala',
        'Punjab, India, 141010'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 9814700930',
        '+91 9814900930'
      ],
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'Saggufurniture0930@gmail.com',
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Sunday: 10:00 AM - 7:30 PM',
      ],
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Separate handler for react-phone-input-2
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send email using EmailJS
    try {
      await sendEnquiryEmail({
        name: formData.firstName + ' ' + formData.lastName,
        email: formData.email,
        message: formData.message,
        title: formData.subject,
        phone: formData.phone
      });
      setIsSubmitted(true);
    } catch (error) {
      alert('Failed to send message. Please try again.');
      return;
    }
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Get in touch with us for any inquiries about our furniture collections
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className={`${item.color} rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="write your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="write your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="write your mail adress"
                  />
                </div>
                
                <div className="w-full">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <PhoneInput
                    country={'us'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputClass="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="write your contact number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="General Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your furniture needs or any questions you have..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Showroom</h3>
              <div className="bg-gray-200 rounded-lg mb-6 overflow-hidden" style={{ position: 'relative', height: '250px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.163296768325!2d76.41798607502339!3d30.374720602847813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391027d9aaaaaaab%3A0x487e4762388b01d3!2sSaggu%20Furniture%20Patiala%20-%20Furnished%20Dealer!5e0!3m2!1sen!2sin!4v1756046965163!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, width: '100%', height: '100%', borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saggu Furniture Patiala Map"
                ></iframe>
              </div>
              <button className="cursor-pointer w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2" />
                <a href="https://maps.app.goo.gl/EHwd5Er24r5wr5Vm7" target='_blank'>Get Directions</a>
              </button>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Saggu Furniture?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">8+ Years Experience</h4>
                    <p className="text-gray-600 text-sm">Trusted by thousands of customers across India and Globe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Quality</h4>
                    <p className="text-gray-600 text-sm">Handcrafted furniture with attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                    <p className="text-gray-600 text-sm">Tailored furniture to match your space and style</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trust & Reliability</h4>
                    <p className="text-gray-600 text-sm">Years of experience in the furniture industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;