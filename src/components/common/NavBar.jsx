import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const isHome = location.pathname === '/home';
    const isAbout = location.pathname === '/about';
    const isContact = location.pathname === '/contact';
    const isView = location.pathname === '/view';
    const isCounter = location.pathname === '/counter';

    return (
        <nav className="flex gap-5 p-3 bg-amber-300 items-center">
            <NavLink to="/home" className={isHome ? 'active' : 'link'}>
                Home
            </NavLink>

            <NavLink to="/about" className={isAbout ? 'active' : 'link'}>
                About
            </NavLink>

            <NavLink to="/contact" className={isContact ? 'active' : 'link'}>
                Contact
            </NavLink>

            <NavLink to="/view" className={isView ? 'active' : 'link'}>
                View
            </NavLink>

            <NavLink to="/counter" className={isCounter ? 'active' : 'link'}>
                Counter
            </NavLink>

            <div className="ml-auto italic">
                {isHome && (
                    <button className='px-5 py-2 bg-white text-black rounded-full cursor-pointer'>Home</button>
                )}
                {isAbout && (
                    <button className='px-5 py-2 bg-white text-black rounded-full cursor-pointer'>About</button>
                )}
                {isContact && (
                    <button className='px-5 py-2 bg-white text-black rounded-full cursor-pointer'>Contact</button>
                )}
                {isView && (
                    <button className='px-5 py-2 bg-white text-black rounded-full cursor-pointer'>View</button>
                )}
                {isCounter && (
                    <button className='px-5 py-2 bg-white text-black rounded-full cursor-pointer'>Counter</button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
