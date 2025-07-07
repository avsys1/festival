import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OverlayMenu } from "../pages/OverlayMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
      <div
        style={{ width: "100%" }}
        className="px-4 py-4 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500 navbar-logo">
          <img src="./obrazky/logo.svg" alt="Logo" className="h-10" />
        </Link>

        {
          /* Desktop Logo */
          <div className="navbar-date hidden md:block">28.8. - 31.8.2025</div>
        }

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <OverlayMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link to="/" className="hover:text-white" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/lineup"
              className="hover:text-white"
              onClick={toggleMenu}
            >
              Lineup
            </Link>
            <Link
              to="https://tickets.drevjeno.cz"
              className="hover:text-white"
              onClick={toggleMenu}
            >
              Tickets
            </Link>
            <Link to="/info" className="hover:text-white" onClick={toggleMenu}>
              Info
            </Link>
            <Link
              to="https://t.me/+sLPjGaYpe045Yjg0"
              className="hover:text-white"
              onClick={toggleMenu}
            >
              Telegram
            </Link>
            <Link
              to="https://discord.gg/NThqMbWQvT"
              className="hover:text-white"
              onClick={toggleMenu}
            >
              Discord
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
