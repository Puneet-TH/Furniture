
import React from 'react';
import { X, Star, Send } from 'lucide-react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const EnquireForm = ({
  isOpen,
  onClose,
  selectedProduct,
  enquiryForm,
  onFormChange,
  onSubmit,
  auth
}) => {
  // Custom handler for phone input
  const handlePhoneChange = (value) => {
    onFormChange({ target: { name: 'phone', value } });
  };
  if (!isOpen) return null;

  // Show error for not logged in users only
  const notLoggedIn = !auth || !auth.status;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Error warning for not logged in users only */}
          {notLoggedIn && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded text-center font-semibold">
              Only registered and logged in users can make an enquiry. Please <span className="text-orange-700 font-bold">register</span> or <span className="text-orange-700 font-bold">log in</span> to continue.
            </div>
          )}
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Product Enquiry</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Product Info */}
          {selectedProduct && (
            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900">{selectedProduct.name}</h3>
                <p className="text-orange-600 font-semibold">₹{selectedProduct.price.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{selectedProduct.rating}</span>
                </div>
              </div>
            </div>
          )}

          {/* Enquiry Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={enquiryForm.name}
                  onChange={onFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your full name"
                />
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
                  value={enquiryForm.email}
                  onChange={onFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <PhoneInput
                country={'in'}
                value={enquiryForm.phone}
                onChange={handlePhoneChange}
                inputClass="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="write your contact number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={enquiryForm.message}
                onChange={onFormChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={notLoggedIn}
                className={`flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center ${notLoggedIn ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;
