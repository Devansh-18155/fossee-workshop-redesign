import { useState } from "react";
import { Link } from "react-router-dom";

const workshops = [
  { id: 1, title: "Python for Beginners", instructor: "Prof. Anil Kumar", date: "April 15, 2026", location: "IIT Bombay", seats: 30, tag: "Python", color: "from-yellow-500 to-orange-500" },
  { id: 2, title: "Scilab Fundamentals", instructor: "Prof. Meena Shah", date: "April 20, 2026", location: "IIT Madras", seats: 25, tag: "Scilab", color: "from-green-500 to-teal-500" },
  { id: 3, title: "Advanced Django Development", instructor: "Prof. Rahul Verma", date: "May 1, 2026", location: "IIT Delhi", seats: 20, tag: "Django", color: "from-purple-500 to-pink-500" },
  { id: 4, title: "Data Science with Python", instructor: "Prof. Priya Nair", date: "May 10, 2026", location: "IIT Kharagpur", seats: 35, tag: "Python", color: "from-blue-500 to-cyan-500" },
  { id: 5, title: "Linux Essentials", instructor: "Prof. Suresh Iyer", date: "May 15, 2026", location: "IIT Roorkee", seats: 40, tag: "Linux", color: "from-gray-500 to-slate-600" },
  { id: 6, title: "OpenFOAM Workshop", instructor: "Prof. Deepak Joshi", date: "May 20, 2026", location: "IIT Kanpur", seats: 15, tag: "OpenFOAM", color: "from-red-500 to-rose-500" },
];

function WorkshopList() {
  const [search, setSearch] = useState("");

  const filtered = workshops.filter(w =>
    w.title.toLowerCase().includes(search.toLowerCase()) ||
    w.tag.toLowerCase().includes(search.toLowerCase()) ||
    w.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }} className="px-4 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-purple-300 mb-4"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <span className="w-2 h-2 bg-purple-400 rounded-full" style={{ animation: 'pulse 2s infinite' }} />
            {filtered.length} Workshops Available
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="gradient-text">Workshops</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Browse and book workshops on open-source tools from top institutions
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10 max-w-2xl mx-auto">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search by title, tool or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl text-white text-sm focus:outline-none"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)'
            }}
          />
        </div>

        {/* Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-400 text-lg">No workshops found for "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((w, i) => (
              <div
                key={w.id}
                className="rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  animationDelay: `${i * 0.1}s`
                }}
              >
                {/* Gradient Top Bar */}
                <div className={`bg-gradient-to-r ${w.color} p-6`}>
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {w.tag}
                  </span>
                  <h2 className="text-white font-bold text-xl mt-3 mb-1">{w.title}</h2>
                  <p className="text-white/70 text-sm">by {w.instructor}</p>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="space-y-2 mb-5">
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <span>📅</span> {w.date}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <span>📍</span> {w.location}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <span>🪑</span> {w.seats} seats available
                    </p>
                  </div>

                  <Link
                    to={`/workshops/${w.id}`}
                    className={`block text-center bg-gradient-to-r ${w.color} text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition`}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkshopList;