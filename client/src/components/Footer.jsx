import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className="bg-amber-950 text-primary-content py-10 px-4 border-t border-amber-800 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Bedroom */}
        <div className='text-amber-50'>
          <h3 className="text-amber-700 font-semibold text-lg mb-4 tracking-wide" style={{letterSpacing: '1px'}}>BEDROOM</h3>
          <ul className="space-y-2 text-base">
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Beds</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Chairs</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Storage</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Wardrobes</NavLink></li>
          </ul>
        </div >
        {/* Living Room */}
        <div className='text-amber-50'>
          <h3 className="text-amber-700 font-semibold text-lg mb-4 tracking-wide" style={{letterSpacing: '1px'}}>LIVING ROOM</h3>
          <ul className="space-y-2 text-base">
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Sofas</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Chairs</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Storage</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Tables</NavLink></li>
          </ul>
        </div>
        {/* Dining Room */}
        <div className='text-amber-50'>
          <h3 className="text-amber-700 font-semibold text-lg mb-4 tracking-wide" style={{letterSpacing: '1px'}}>DINNING ROOM</h3>
          <ul className="space-y-2 text-base">
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Dinning Sets</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Tables</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Chairs</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Storage</NavLink></li>
          </ul>
        </div>
        {/* Office Furniture */}
        <div  className='text-amber-50'>
          <h3 className="text-amber-700 font-semibold text-lg mb-4 tracking-wide" style={{letterSpacing: '1px'}}>OFFICE FURNITURE</h3>
          <ul className="space-y-2 text-base">
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Chairs</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Desks</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Workstation</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-amber-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Storage</NavLink></li>
          </ul>
        </div>
        {/* Contact/Anzer Furniture */}
        <div className='text-amber-50'>
          <h3 className="text-amber-700 font-semibold text-lg mb-4 tracking-wide" style={{letterSpacing: '1px'}}>ANZER FURNITURE</h3>
          <ul className="space-y-3 text-base opacity-90">
            <li className="flex items-start gap-2">
              <span className="pt-1 text-amber-700">
                {/* Location icon */}
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <span>Plot no C-170/71<br/>Focal point patiala<br/>Punjab, India, 141010</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-700">
                {/* Phone icon */}
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              </span>
              <span>+91-9814700930</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-700">
                {/* Phone icon */}
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              </span>
              <span>+91-9814900930</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-700">
                {/* Email icon */}
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg>
              </span>
              <span>Saggufurniture0930@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-700">
                {/* Clock icon */}
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8v5h5M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>
              </span>
              <span>Mon - Sun: 10AM - 7:30PM</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-700">
                {/* Map icon */}
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <a href="https://maps.app.goo.gl/MjFzUsx4yVTa2MUu8" target='_blank' className="hover:text-amber-700 underline">View Directions in Google Map</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
