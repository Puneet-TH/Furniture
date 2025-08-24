import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserEnquiries } from '../api/getUserEnquiries';

const Orders = () => {
  const auth = useSelector((state) => state.auth);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchEnquiries() {
      if (!auth.data?._id) {
        setEnquiries([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const res = await getUserEnquiries(auth.data._id);
        if (res && res.success && Array.isArray(res.enquiries)) {
          // Sort by createdAt descending, fallback to _id if missing
          const sorted = [...res.enquiries].sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : parseInt(a._id.substring(0,8), 16) * 1000;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : parseInt(b._id.substring(0,8), 16) * 1000;
            return dateB - dateA;
          });
          setEnquiries(sorted);
        } else {
          setEnquiries([]);
          setError(res && res.message ? res.message : 'Failed to fetch enquiries.');
        }
      } catch (err) {
        setError('Failed to fetch enquiries.');
        setEnquiries([]);
      } finally {
        setLoading(false);
      }
    }
    fetchEnquiries();
  }, [auth.data]);
  return (
    <div className="min-h-[70vh] bg-[#f8f6f3] py-12 px-2 sm:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-[#3d1a00] flex items-center justify-center gap-2">
          My Order History
        </h1>
        {loading ? (
          <div className="text-gray-600 text-center text-lg">Loading...</div>
        ) : error ? (
          <div className="text-red-600 text-center text-lg">{error}</div>
        ) : !auth.data?._id ? (
          <div className="text-gray-600 text-center text-lg">Please log in to view your order history.</div>
        ) : enquiries.length === 0 ? (
          <div className="text-gray-600 text-center text-lg">No orders yet.</div>
        ) : (
          <div className="space-y-7">
            {enquiries.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row gap-4 items-start border border-[#e5e3df] hover:shadow-lg transition-shadow">
                <div className="flex-1">
                  <div className="text-lg font-semibold text-[#3d1a00] mb-1">{item.title || 'Order'}</div>
                  <div className="text-gray-800 mb-2">{item.message}</div>
                  <div className="text-gray-600 text-sm mb-1">
                    <b>Order Date:</b> {(() => {
                      if (!item.createdAt) return 'N/A';
                      const d = new Date(item.createdAt);
                      return isNaN(d.getTime())
                        ? 'N/A'
                        : d.toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
                    })()}
                  </div>
                  {item.user && (
                    <div className="text-gray-500 text-xs mt-1"><b>Name:</b> {item.user.fullName} &nbsp;|&nbsp; <b>Email:</b> {item.user.email}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders; 