import { useState } from "react";
import { Link } from "react-router-dom";


const workshops = [
  {
    id: 1,
    title: "Python for Beginners",
    instructor: "Prof. Anil Kumar",
    tag: "Python",
    date: "April 15, 2026",
    location: "IIT Bombay",
    seats: 30,
    totalSeats: 50,
  },
  {
    id: 2,
    title: "Scilab Fundamentals",
    instructor: "Prof. Meena Shah",
    tag: "Scilab",
    date: "April 20, 2026",
    location: "IIT Madras",
    seats: 12,
    totalSeats: 40,
  },
  {
    id: 3,
    title: "Advanced Django Dev",
    instructor: "Prof. Rahul Verma",
    tag: "Django",
    date: "May 1, 2026",
    location: "IIT Delhi",
    seats: 8,
    totalSeats: 35,
  },
  {
    id: 4,
    title: "Data Science with Python",
    instructor: "Prof. Priya Nair",
    tag: "Python",
    date: "May 10, 2026",
    location: "IIT Kharagpur",
    seats: 35,
    totalSeats: 60,
  },
  {
    id: 5,
    title: "Linux Essentials",
    instructor: "Prof. Suresh Iyer",
    tag: "Linux",
    date: "May 15, 2026",
    location: "IIT Roorkee",
    seats: 40,
    totalSeats: 55,
  },
  {
    id: 6,
    title: "OpenFOAM Workshop",
    instructor: "Prof. Deepak Joshi",
    tag: "OpenFOAM",
    date: "May 20, 2026",
    location: "IIT Kanpur",
    seats: 7,
    totalSeats: 30,
  },
];

const TAGS = ["All", "Python", "Scilab", "Django", "Linux", "OpenFOAM"];

function WorkshopList() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = workshops.filter((w) => {
    const matchesTag = activeTag === "All" || w.tag === activeTag;
    const searchLower = search.toLowerCase();
    const matchesSearch =
      w.title.toLowerCase().includes(searchLower) ||
      w.location.toLowerCase().includes(searchLower) ||
      w.tag.toLowerCase().includes(searchLower);
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto space-y-8">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl font-bold text-white">Explore Workshops</h1>
          <p className="text-gray-400">Browse and book workshops from top institutions.</p>
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Search by title, tool, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 text-sm rounded-full border ${activeTag === tag
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-gray-800 border-gray-700 text-gray-400"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4">
          {filtered.length === 0 ? (
            <div className="text-center bg-gray-800 border border-gray-700 rounded-lg py-12">
              <p className="text-gray-400">No workshops match your search criteria.</p>
              <button
                onClick={() => { setSearch(""); setActiveTag("All"); }}
                className="mt-4 text-blue-400 text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(w => (
                <div key={w.id} className="bg-gray-800 border border-gray-700 rounded-lg p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-gray-700 rounded text-gray-300">
                        {w.tag}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">
                        {w.seats} / {w.totalSeats} seats
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{w.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{w.instructor}</p>

                    <div className="text-sm text-gray-500 space-y-1 mb-6">
                      <p>📅 {w.date}</p>
                      <p>📍 {w.location}</p>
                    </div>
                  </div>

                  <Link
                    to={`/workshops/${w.id}`}
                    className="block text-center w-full py-2 bg-blue-600 rounded-md text-white text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default WorkshopList;