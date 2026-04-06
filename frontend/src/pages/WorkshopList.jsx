import { Link } from "react-router-dom";

const workshops = [
  {
    id: 1,
    title: "Python for Beginners",
    instructor: "Prof. Anil Kumar",
    date: "April 15, 2026",
    location: "IIT Bombay",
    seats: 30,
    tag: "Python",
  },
  {
    id: 2,
    title: "Scilab Fundamentals",
    instructor: "Prof. Meena Shah",
    date: "April 20, 2026",
    location: "IIT Madras",
    seats: 25,
    tag: "Scilab",
  },
  {
    id: 3,
    title: "Advanced Django Development",
    instructor: "Prof. Rahul Verma",
    date: "May 1, 2026",
    location: "IIT Delhi",
    seats: 20,
    tag: "Django",
  },
  {
    id: 4,
    title: "Data Science with Python",
    instructor: "Prof. Priya Nair",
    date: "May 10, 2026",
    location: "IIT Kharagpur",
    seats: 35,
    tag: "Python",
  },
  {
    id: 5,
    title: "Linux Essentials",
    instructor: "Prof. Suresh Iyer",
    date: "May 15, 2026",
    location: "IIT Roorkee",
    seats: 40,
    tag: "Linux",
  },
  {
    id: 6,
    title: "OpenFOAM Workshop",
    instructor: "Prof. Deepak Joshi",
    date: "May 20, 2026",
    location: "IIT Kanpur",
    seats: 15,
    tag: "OpenFOAM",
  },
];

const tagColors = {
  Python: "bg-yellow-100 text-yellow-700",
  Scilab: "bg-green-100 text-green-700",
  Django: "bg-purple-100 text-purple-700",
  Linux: "bg-gray-100 text-gray-700",
  OpenFOAM: "bg-blue-100 text-blue-700",
};

function WorkshopList() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Available Workshops</h1>
        <p className="text-gray-500 mt-2">Browse and book workshops on open-source tools</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search workshops..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Workshop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workshops.map((w) => (
          <div
            key={w.id}
            className="bg-white rounded-2xl shadow hover:shadow-md transition p-6 flex flex-col justify-between"
          >
            <div>
              {/* Tag */}
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tagColors[w.tag] || "bg-gray-100 text-gray-600"}`}>
                {w.tag}
              </span>

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800 mt-3 mb-1">{w.title}</h2>
              <p className="text-sm text-gray-500 mb-3">by {w.instructor}</p>

              {/* Details */}
              <div className="text-sm text-gray-600 space-y-1">
                <p>📅 {w.date}</p>
                <p>📍 {w.location}</p>
                <p>🪑 {w.seats} seats available</p>
              </div>
            </div>

            {/* Button */}
            <Link
              to={`/workshops/${w.id}`}
              className="mt-5 block text-center bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkshopList;