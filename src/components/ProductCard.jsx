import React from 'react'
import { Star, Heart, Eye, ShoppingCart } from 'lucide-react'

function ProductCard({ product, onEnquire }) {
    return (
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </div>
                )}
                
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-orange-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-50 transition-colors">
                    <Eye className="w-5 h-5 text-gray-600 hover:text-orange-600" />
                  </button>
                </div>
              </div>
        
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-orange-600">{product.category}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    <span className="ml-1 text-sm text-gray-400">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                                         <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                     <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  
                    <button 
                     onClick={() => onEnquire(product)}
                     className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition-colors transform hover:scale-105"
                   >
                     <ShoppingCart className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </div>
    )
}
export default ProductCard
