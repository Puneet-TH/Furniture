import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Heart, Eye, X, Send } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEnquiry } from '../components/store/Enquiry';
import { submitEnquiry } from '../api/enquiry';
import { sendEnquiryEmail } from '../api/email';
import { ToastContainer, toast } from "react-toastify";
import EnquireForm from '../components/EnquireForm';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [highlightedProduct, setHighlightedProduct] = useState(null);
  // State for product close-up modal
  const [viewProduct, setViewProduct] = useState(null);
  // Open product close-up modal
  const openView = (product) => {
    setViewProduct(product);
  };

  // Close product close-up modal
  const closeView = () => {
    setViewProduct(null);
  };
  const [searchParams] = useSearchParams();
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    // Load products and categories from JSON file
    setProducts(productsData.products);
    setCategories(productsData.categories);
    
    // Get search query from URL
    const searchQuery = searchParams.get('search');
    const productId = searchParams.get('product');
    
    if (searchQuery) {
      setSearch(searchQuery);
    }
    
    if (productId) {
      const product = productsData.products.find(p => p.id === parseInt(productId));
      if (product) {
        setHighlightedProduct(product);
        setSearch(product.name);
        // Scroll to the product after a short delay
        setTimeout(() => {
          const element = document.getElementById(`product-${productId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('ring-4', 'ring-amber-500', 'ring-opacity-50');
            setTimeout(() => {
              element.classList.remove('ring-4', 'ring-amber-500', 'ring-opacity-50');
            }, 3000);
          }
        }, 500);
      }
    }
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openEnquiry = (product) => {
    setSelectedProduct(product);
    setIsEnquiryOpen(true);
    setEnquiryForm({
      name: '',
      email: '',
      phone: '',
      message: `I'm interested in the ${product.name}. Please provide more details about pricing, availability, and delivery options.`
    });
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedProduct(null);
    setEnquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleFormChange = (e) => {
    setEnquiryForm({
        //destructure the enquiryForm
      ...enquiryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Save enquiry to backend
    const saveRes = await submitEnquiry({
      name: selectedProduct?.name,
      user: auth.data?._id,
    });
    // 2. Send email to admin using EmailJS
    try {
      await sendEnquiryEmail({
        ...enquiryForm,
        product: selectedProduct
      });
      toast.success('Thank you for your enquiry! We will contact you soon.');
    } catch (err) {
      toast.error('Enquiry saved, but failed to send email.');
    }
    // Optionally save to Redux store
    dispatch(addEnquiry({
      product: selectedProduct,
      enquiry: enquiryForm,
      user: auth.data,
      date: new Date().toISOString(),
      status: 'pending',
    }));
    closeEnquiry();
  };

  return (
  <div className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      <ToastContainer position="top-center" autoClose={4000}/>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">
              Our Furniture Collection
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl mx-auto">
              Discover premium furniture pieces crafted with passion and precision
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-8">
  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between mb-6 md:mb-8">
          {/* Search */}
          <div className="relative w-full max-w-md mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search furniture"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 w-full justify-center md:justify-start">
           {categories.map((category) => {
            return(
                <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer ${
                    selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-300'
                }`}
                >
                    {category}
                </button>
            )
           })
           }
          </div>
        </div>

        {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              id={`product-${product.id}`}
              className={`transition-all duration-300 cursor-pointer ${
                highlightedProduct && highlightedProduct.id === product.id 
                  ? 'ring-4 ring-amber-500 ring-opacity-50' 
                  : ''
              }`}
            >
              <ProductCard product={product} onEnquire={openEnquiry} onView={openView} />
      {/* Product Close-up Modal */}
      {viewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-all">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-fadeIn">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
              onClick={closeView}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={viewProduct.image}
              alt={viewProduct.name}
              className="w-full h-80 object-contain mb-4 rounded"
              style={{ maxHeight: '20rem' }}
            />
            <h2 className="text-2xl font-semibold mb-2">{viewProduct.name}</h2>
            <p className="text-gray-700 mb-2">{viewProduct.description}</p>
            <p className="text-gray-500 text-sm">Category: {viewProduct.category}</p>
          </div>
        </div>
      )}
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      <EnquireForm
        isOpen={isEnquiryOpen}
        onClose={closeEnquiry}
        selectedProduct={selectedProduct}
        enquiryForm={enquiryForm}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        auth={auth}
      />
    </div>
  );
};

export default Shop;