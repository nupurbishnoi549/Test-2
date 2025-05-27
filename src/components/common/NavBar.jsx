import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const isHome = location.pathname === '/home';
    const isAbout = location.pathname === '/about';
    const isContact = location.pathname === '/contact';
    const isView = location.pathname === '/view';
    const isCounter = location.pathname === '/counter';

    const linkClass = (isActive) =>
        isActive ? 'font-bold text-red-500' : 'no-underline text-green-600';

    return (
        <nav className="bg-amber-300 p-3">
            <div className="flex items-center justify-between md:justify-between px-3">
                <div className={`text-xl font-bold ${menuOpen ? 'hidden' : ''} md:block`}>
                    My App
                </div>

                <button className="text-2xl md:hidden ml-auto" onClick={toggleMenu}>
                    {menuOpen ? '✖️' : '☰'}
                </button>

                <div className="hidden md:flex gap-5 items-center ml-10">
                    <NavLink to="/home" className={linkClass(isHome)}>Home</NavLink>
                    <NavLink to="/about" className={linkClass(isAbout)}>About</NavLink>
                    <NavLink to="/contact" className={linkClass(isContact)}>Contact</NavLink>
                    <NavLink to="/view" className={linkClass(isView)}>View</NavLink>
                    <NavLink to="/counter" className={linkClass(isCounter)}>Counter</NavLink>
                </div>
            </div>

            {menuOpen && (
                <div className="flex flex-col gap-3 mt-4 items-center justify-center md:hidden">
                    <NavLink to="/home" onClick={toggleMenu} className={linkClass(isHome)}>Home</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className={linkClass(isAbout)}>About</NavLink>
                    <NavLink to="/contact" onClick={toggleMenu} className={linkClass(isContact)}>Contact</NavLink>
                    <NavLink to="/view" onClick={toggleMenu} className={linkClass(isView)}>View</NavLink>
                    <NavLink to="/counter" onClick={toggleMenu} className={linkClass(isCounter)}>Counter</NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
