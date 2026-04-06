import { Link, useParams } from "react-router-dom";

const workshops = [
  {
    id: 1,
    title: "Python for Beginners",
    instructor: "Prof. Anil Kumar",
    date: "April 15, 2026",
    location: "IIT Bombay",
    seats: 30,
    tag: "Python",
    duration: "2 Days",
    description:
      "This workshop introduces students to Python programming from scratch. Topics include variables, loops, functions, file handling, and basic libraries like NumPy and Matplotlib.",
    prerequisites: "No prior programming experience required.",
    schedule: [
      { day: "Day 1", topic: "Python Basics - Variables, Loops, Functions" },
      { day: "Day 2", topic: "Libraries - NumPy, Matplotlib, File Handling" },
    ],
  },
  {
    id: 2,
    title: "Scilab Fundamentals",
    instructor: "Prof. Meena Shah",
    date: "April 20, 2026",
    location: "IIT Madras",
    seats: 25,
    tag: "Scilab",
    duration: "1 Day",
    description:
      "Learn the basics of Scilab, an open-source alternative to MATLAB. This workshop covers matrix operations, plotting, and basic simulations.",
    prerequisites: "Basic mathematics knowledge required.",
    schedule: [
      { day: "Day 1", topic: "Scilab Basics - Matrix Operations and Plotting" },
    ],
  },
];

function WorkshopDetails() {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === parseInt(id)) || workshops[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Back Button */}
      <Link
        to="/workshops"
        className="text-blue-600 text-sm hover:underline mb-6 inline-block"
      >
        ← Back to Workshops
      </Link>

      {/* Header */}
      <div className="bg-blue-700 text-white rounded-2xl p-8 mb-6">
        <span className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {workshop.tag}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold mt-3 mb-2">{workshop.title}</h1>
        <p className="text-blue-200 text-sm">by {workshop.instructor}</p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Date", value: workshop.date, icon: "📅" },
          { label: "Location", value: workshop.location, icon: "📍" },
          { label: "Duration", value: workshop.duration, icon: "⏱️" },
          { label: "Seats", value: `${workshop.seats} available`, icon: "🪑" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl mb-1">{item.icon}</div>
            <p className="text-xs text-gray-500">{item.label}</p>
            <p className="text-sm font-semibold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">About this Workshop</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{workshop.description}</p>
      </div>

      {/* Prerequisites */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Prerequisites</h2>
        <p className="text-sm text-gray-600">{workshop.prerequisites}</p>
      </div>

      {/* Schedule */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Schedule</h2>
        <div className="space-y-3">
          {workshop.schedule.map((s, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                {s.day}
              </span>
              <p className="text-sm text-gray-600">{s.topic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Book Button */}
      <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-600 transition">
        Book This Workshop
      </button>
    </div>
  );
}

export default WorkshopDetails;