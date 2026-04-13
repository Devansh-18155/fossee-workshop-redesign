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
    <nav className="sticky top-0 z-50 border-b bg-gray-900 border-gray-700">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(link.to)
                    ? "bg-gray-900 text-white"
                    : "text-gray-300"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <Link to="/login" className="text-gray-300 text-sm font-medium px-4 py-2 rounded-md">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-300 focus:outline-none"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute bg-gray-900 top-full left-0 w-full border-b border-gray-700/50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive(link.to)
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "text-gray-300"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-700/50 flex flex-col gap-3">
              <Link to="/login" onClick={() => setIsOpen(false)} className="block text-gray-300 text-base font-medium py-3 px-4 rounded-lg text-center">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium">
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