import React from 'react';
import { ArrowRight, Star, Truck, Shield, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';
function Hero(){
  return (
    <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your
                <span className="text-orange-400 block">Living Space</span>
              </h1>
              <p className="text-xl text-amber-100 leading-relaxed">
                Discover premium furniture crafted with passion and precision. From modern minimalist to classic elegance, find pieces that define your style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to="/ExploreCollection" viewTransition className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center group">
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink to="/ViewCatalog" viewTransition className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center">
                View Catalog
              </NavLink>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-amber-100">4.9/5 Rating</span>
              </div>
              <div className="text-amber-100">
                <span className="text-2xl font-bold text-orange-400">10,000+</span> Happy Customers
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 transform hover:scale-105 shadow-2xl transition">
              <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Modern Living Room"
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900">Modern Living Set</h3>
                  <p className="text-gray-600">Starting from $2,499</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-full p-2">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Premium Quality</p>
                  <p className="text-xs text-gray-500">Handcrafted Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-600 rounded-full p-3">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Free Delivery</h3>
              <p className="text-amber-200">On orders over $1,000</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-orange-600 rounded-full p-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">10-Year Warranty</h3>
              <p className="text-amber-200">Quality guaranteed</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-orange-600 rounded-full p-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Expert Craftsmanship</h3>
              <p className="text-amber-200">Handmade with love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;