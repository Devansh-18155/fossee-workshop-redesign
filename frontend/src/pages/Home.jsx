import { Link } from "react-router-dom";

const features = [
  { title: "Expert Instructors", desc: "Learn from professors at IITs and top institutions." },
  { title: "Hands-on Training", desc: "Practical experience with Python, Scilab, Django and more." },
  { title: "Mobile Friendly", desc: "Access workshops and book your spot from any device." },
  { title: "Free & Open", desc: "All workshops are completely free for students across India." },
  { title: "Certificates", desc: "Get certified after completing each workshop successfully." },
  { title: "Fast Booking", desc: "Book your spot in seconds with our streamlined process." },
];

const workshops = [
  {
    id: 1,
    tag: "Python",
    title: "Python for Beginners",
    desc: "Master Python basics, data types, loops, functions and file handling from scratch.",
    instructor: "Prof. Anil Kumar",
    date: "Apr 15, 2026",
    seats: 42,
    totalSeats: 60,
  },
  {
    id: 2,
    tag: "Scilab",
    title: "Scilab Fundamentals",
    desc: "Learn numerical computing, matrix operations, and plotting with Scilab.",
    instructor: "Prof. Meena Shah",
    date: "Apr 20, 2026",
    seats: 18,
    totalSeats: 50,
  },
  {
    id: 3,
    tag: "Django",
    title: "Advanced Django",
    desc: "Build production-ready web apps with Django REST, auth, and deployment.",
    instructor: "Prof. Rahul Verma",
    date: "May 1, 2026",
    seats: 7,
    totalSeats: 40,
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">

      {/* Hero Section */}
      <section className="px-4 py-20 text-center max-w-4xl mx-auto mt-8 md:mt-16">
        <div className="inline-block px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-800">
          IIT Bombay Initiative
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Learn with <span className="text-blue-500">FOSSEE</span> Workshops
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore, book, and propose workshops on open-source tools.
          Empowering students and educators across India completely free.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/workshops"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
          >
            Browse Workshops &rarr;
          </Link>
          <Link
            to="/propose"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md border border-gray-700 transition"
          >
            Propose a Workshop
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Workshops Conducted" },
              { value: "50,000+", label: "Students Trained" },
              { value: "200+", label: "Institutions Enrolled" },
              { value: "15+", label: "Open Source Tools" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose FOSSEE?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to learn, grow and contribute to open-source education.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition">
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Workshops</h2>
            <p className="text-gray-400">Join our upcoming sessions.</p>
          </div>
          <Link to="/workshops" className="text-blue-400 hover:text-blue-300 font-medium mt-4 md:mt-0">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((w) => (
            <div key={w.id} className="bg-gray-800 border border-gray-700 rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded">{w.tag}</span>
                  <span className={`text-xs font-semibold ${w.seats <= 10 ? 'text-red-400' : 'text-gray-400'}`}>
                    {w.seats} / {w.totalSeats} seats
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{w.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{w.desc}</p>
                <div className="text-sm text-gray-500 space-y-1 mb-6">
                  <p>👤 {w.instructor}</p>
                  <p>📅 {w.date}</p>
                </div>
              </div>
              <Link
                to={`/workshops/${w.id}`}
                className="block w-full text-center py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works / Steps */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-900 text-blue-300 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-white font-bold mb-2">Find a Workshop</h3>
              <p className="text-sm text-gray-400">Browse our library of open-source tools and topics.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-900 text-blue-300 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-white font-bold mb-2">Register for Free</h3>
              <p className="text-sm text-gray-400">Create an account and book your spot instantly.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-900 text-blue-300 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-white font-bold mb-2">Learn & Certify</h3>
              <p className="text-sm text-gray-400">Attend the session and earn your IIT Bombay certificate.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;