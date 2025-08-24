import React from 'react'
import { Star, Heart, Eye, ShoppingCart } from 'lucide-react'

function ProductCard({ product, onEnquire, onView }) {
    return (
  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-full">
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.isNew && (
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                New
              </div>
            )}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-50 transition-colors cursor-pointer"
                onClick={() => onView(product)}
                aria-label="View product"
              >
                <Eye className="w-5 h-5 text-gray-600 hover:text-orange-600" />
              </button>
            </div>
          </div>
            <div className="p-4 sm:p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-xs sm:text-sm font-medium text-orange-600">{product.category}</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-xs sm:text-sm text-gray-600">{product.rating}</span>
                <span className="ml-1 text-xs sm:text-sm text-gray-400">({product.reviews})</span>
              </div>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
              {product.name}
            </h3>
            <div className="mt-auto flex justify-center">
              <button 
                onClick={() => onEnquire(product)}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow group-hover:shadow-lg text-sm sm:text-base mb-2"
                style={{marginBottom: '0.25rem'}}
              >
                <ShoppingCart className="w-5 h-5" />
                Enquire Now Here
              </button>
            </div>
          </div>
        </div>
    )
}
export default ProductCard
