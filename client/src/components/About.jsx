import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
function About(){
  const stats = [
    {
      icon: Award,
      value: '25+',
      label: 'Years Experience',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      value: '50,000+',
      label: 'Products Delivered',
      color: 'text-orange-600'
    },
    {
      icon: Heart,
      value: '4.9/5',
      label: 'Customer Rating',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Crafting Dreams Into
                <span className="text-orange-400 block">Reality</span>
              </h2>
              <p className="text-xl text-amber-100 leading-relaxed mb-6">
                For over 25 years, Anzer Furniture has been creating exceptional pieces that transform houses into homes. Our passion for quality craftsmanship and timeless design drives every piece we create.
              </p>
              <p className="text-amber-200 leading-relaxed">
                From our workshop in Panchkula, Haryana, we've built a reputation for excellence, serving customers across India with furniture that combines traditional craftsmanship with modern aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-amber-200 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Craftsmanship"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
                <img
                  src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Quality Materials"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Modern Design"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
                <img
                  src="https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Attention to Detail"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;