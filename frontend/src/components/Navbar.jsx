import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          FOSSEE Workshops
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/workshops" className="hover:text-yellow-300 transition">Workshops</Link>
          <Link to="/propose" className="hover:text-yellow-300 transition">Propose</Link>
          <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
          <Link to="/login" className="bg-white text-blue-700 px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300 transition">
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Home</Link>
          <Link to="/workshops" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Workshops</Link>
          <Link to="/propose" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Propose</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Profile</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;