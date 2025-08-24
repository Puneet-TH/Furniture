import React from 'react';

const testimonials = [
  {
    name: 'DIG Chandigarh',
    title: 'Senior Police Officer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    testimonial: 'The quality and service are unmatched. Highly recommended for anyone looking for premium furniture!'
  },
  {
    name: 'Harnam Sandhu',
    title: 'Women’s Captain, India',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    testimonial: 'Absolutely love the craftsmanship and attention to detail. The team is very professional.'
  },
  {
    name: 'Kampi Bath',
    title: 'Javelin Thrower',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    testimonial: 'My experience was fantastic. The furniture is both stylish and durable. Will buy again!'
  }
];

const Testimonials = () => (
  <section className="py-10 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-amber-50">What Our Esteemed Clients Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#fff8f3] rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition border border-orange-100 transform hover:scale-105 duration-300">
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-orange-200" />
            <p className="text-brown-900 italic mb-3">“{t.testimonial}”</p>
            <div className="font-semibold text-orange-800">{t.name}</div>
            <div className="text-sm text-brown-700 opacity-80">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
