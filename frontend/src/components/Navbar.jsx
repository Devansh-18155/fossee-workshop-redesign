import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/workshops", label: "Workshops" },
    { to: "/propose", label: "Propose" },
    { to: "/profile", label: "Profile" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="font-bold text-white text-lg tracking-wide">
                FOSSEE Workshops
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <Link to="/login" className="text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col gap-2 px-3 pb-2">
              <Link to="/login" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white hover:bg-gray-700 text-base font-medium py-2 px-3 rounded-md transition text-center">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;