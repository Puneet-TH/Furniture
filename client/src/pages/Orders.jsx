import React from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
  const enquiries = useSelector((state) => state.enquiry.enquiries);
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My Enquiries / Order History</h1>
      {enquiries.length === 0 ? (
        <div className="text-gray-600">No enquiries yet.</div>
      ) : (
        <div className="space-y-6">
          {enquiries.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
              <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">{item.product.name}</h2>
                <div className="text-orange-600 font-semibold mb-2">₹{item.product.price.toLocaleString()}</div>
                <div className="text-gray-700 mb-1"><b>Status:</b> {item.status}</div>
                <div className="text-gray-700 mb-1"><b>Enquiry Date:</b> {new Date(item.date).toLocaleString()}</div>
                <div className="text-gray-700 mb-1"><b>Message:</b> {item.enquiry.message}</div>
                <div className="text-gray-700 text-sm mt-2"><b>Name:</b> {item.enquiry.name} | <b>Email:</b> {item.enquiry.email} | <b>Phone:</b> {item.enquiry.phone}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders; 