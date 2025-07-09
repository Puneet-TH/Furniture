import React, { useState } from 'react'
import { Link , NavLink, useNavigate } from 'react-router-dom'

function Header() {
    const [menu, setMenu] = useState(false);
    // Placeholder for authentication status (replace with Redux logic later)
    const isAuthenticated = false; // set to true to simulate logged-in state
    const userName = 'John Doe'; // placeholder for user name
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
      e.preventDefault();
      if (search.trim()) {
        navigate(`/shop?search=${encodeURIComponent(search)}`);
        setMenu(false); // close mobile menu if open
      }
    };
    return (
        <div className='position-sticky top-0 bg-amber-950 text-white p-6 font-bold'>
            {/* Responsive Header Layout */}
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 w-full'>
                {/* Logo and Hamburger for mobile */}
                <div className='flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0'>
                    <div className='flex items-center'>
                        <img className="w-12 h-12 object-cover rounded-full cursor-pointer"
                         onClick={({isActive}) => isActive? navigate('/') : navigate('/')}
                        src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg" alt="Logo" />
                    </div>
                    {/* Hamburger Icon for Mobile */}
                    <button className='sm:hidden flex flex-col justify-center items-center' onClick={() => setMenu(!menu)} aria-label="Open menu">
                        <span className='block w-6 h-0.5 bg-white mb-1'></span>
                        <span className='block w-6 h-0.5 bg-white mb-1'></span>
                        <span className='block w-6 h-0.5 bg-white'></span>
                    </button>
                </div>
                {/* Search bar - responsive */}
                <form onSubmit={handleSearch} className="w-full sm:flex-1 flex justify-center mb-4 sm:mb-0 sm:mx-8 order-2 sm:order-none">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-full sm:max-w-xl px-6 py-3 rounded-md text-brown-900 bg-white border-2 focus:outline-none focus:border-amber-700 text-lg shadow"
                        style={{ color: '#6B3F1D', borderColor: '#6B3F1D' }}
                    />
                    <button type="submit" className="-ml-16 px-6 py-2 bg-amber-900 text-white rounded-md font-semibold shadow hover:bg-amber-700 transition">Search</button>
                </form>
                {/* Desktop Nav */}
                <div className='hidden sm:flex gap-20 justify-between items-center p-6'>
                    {/* Navigation links */}
                    <NavLink to="/">
                        {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Home</span>}
                    </NavLink>
                    <NavLink to="/shop">
                        {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Shop</span>}
                    </NavLink>
                    <NavLink to="/contactus">
                        {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Contact Us</span>}
                    </NavLink>
                    <NavLink to="/signup">
                        {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Signup</span>}
                    </NavLink>
                    {isAuthenticated ? (
                        <div className="relative group ml-4">
                            <button className="flex items-center gap-2 focus:outline-none">
                                <span className="font-semibold">{userName}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <div className="absolute hidden group-hover:block bg-amber-900 text-white right-0 mt-2 py-2 w-40 rounded shadow-lg z-10">
                                <NavLink to="/profile" className="block px-4 py-2 hover:bg-amber-800">Profile</NavLink>
                                <NavLink to="/orders" className="block px-4 py-2 hover:bg-amber-800">Order History</NavLink>
                                <NavLink to="/cart" className="block px-4 py-2 hover:bg-amber-800">Cart</NavLink>
                            </div>
                        </div>
                    ) : (
                        <NavLink to="/login">
                            <span className="cursor-pointer">Login</span>
                        </NavLink>
                    )}
                </div>
            </div>
            {/* Dropdown Menu for Mobile */}
            {menu && (
                <div className='sm:hidden bg-amber-900 rounded shadow-lg mt-2 p-4'>
                    {/* Search box for mobile (already styled above, so skip here) */}
                    <form onSubmit={handleSearch} className="flex items-center mb-3 bg-amber-50 rounded-md">
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className="px-2 py-1 rounded text-black w-full"
                        />
                        <button type="submit" className="ml-2 px-2 py-1 bg-amber-700 rounded text-white">Search</button>
                    </form>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <NavLink to="/">
                                {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Home</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">
                                {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Shop</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Contact Us</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">
                                {({ isActive }) => <span className={isActive ? 'cursor-pointer text-amber-700' : 'cursor-pointer'}>Signup</span>}
                            </NavLink>
                        </li>
                        {isAuthenticated ? (
                          <>
                            <li>
                              <NavLink to="/profile">
                                <span className="cursor-pointer">Profile</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/orders">
                                <span className="cursor-pointer">Order History</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/cart">
                                <span className="cursor-pointer">Cart</span>
                              </NavLink>
                            </li>
                          </>
                        ) : (
                          <li>
                            <NavLink to="/login">
                              <span className="cursor-pointer">Login</span>
                            </NavLink>
                          </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header
