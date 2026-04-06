import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold mb-2">FOSSEE Workshops</h2>
          <p className="text-sm text-blue-200">
            Promoting open-source tools in education across India.
            An IIT Bombay initiative.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-blue-200">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/workshops" className="hover:text-yellow-300 transition">Workshops</Link></li>
            <li><Link to="/propose" className="hover:text-yellow-300 transition">Propose a Workshop</Link></li>
            <li><Link to="/register" className="hover:text-yellow-300 transition">Register</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-blue-200">Email: contact@fossee.in</p>
          <p className="text-sm text-blue-200">IIT Bombay, Mumbai - 400076</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-600 text-center py-3 text-xs text-blue-300">
        © {new Date().getFullYear()} FOSSEE, IIT Bombay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;