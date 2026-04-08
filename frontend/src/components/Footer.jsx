import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold text-white mb-2">FOSSEE Workshops</h2>
          <p className="text-sm text-gray-400">
            Promoting open-source tools in education across India.
            An IIT Bombay initiative.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/workshops" className="hover:text-blue-400 transition">Workshops</Link></li>
            <li><Link to="/propose" className="hover:text-blue-400 transition">Propose a Workshop</Link></li>
            <li><Link to="/register" className="hover:text-blue-400 transition">Register</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm text-gray-400 mb-2">Email: contact@fossee.in</p>
          <p className="text-sm text-gray-400">IIT Bombay, Mumbai - 400076</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} FOSSEE, IIT Bombay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;