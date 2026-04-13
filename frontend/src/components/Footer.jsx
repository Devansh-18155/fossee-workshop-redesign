import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Description about the workshop */}
        <div>
          <h2 className="text-lg font-bold text-white mb-2">FOSSEE Workshops</h2>
          <p className="text-sm text-gray-400">
            Promoting open-source tools in education across India.
            An IIT Bombay initiative.
          </p>
        </div>

        {/* Links to navigate into the other specific location */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="block py-1.5">Home</Link></li>
            <li><Link to="/workshops" className="block py-1.5">Workshops</Link></li>
            <li><Link to="/propose" className="block py-1.5">Propose a Workshop</Link></li>
            <li><Link to="/register" className="block py-1.5">Register</Link></li>
          </ul>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm text-gray-400 mb-2">Email: contact@fossee.in</p>
          <p className="text-sm text-gray-400">IIT Bombay, Mumbai - 400076</p>
        </div>
      </div>

      {/* Reservation tag for the webpage */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} FOSSEE, IIT Bombay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;