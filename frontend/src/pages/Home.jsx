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
      <section className="px-4 py-12 md:py-20 text-center max-w-4xl mx-auto mt-4 md:mt-16">
        <div className="inline-block px-4 py-1.5 bg-blue-900/40 text-blue-300 rounded-full text-xs font-medium mb-6 border border-blue-500/30">
          IIT Bombay Initiative
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Learn with <span className="text-blue-400">FOSSEE</span> Workshops
        </h1>
        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Explore, book, and propose workshops on open-source tools.
          Empowering students and educators across India completely free.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/workshops"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg"
          >
            Browse Workshops &rarr;
          </Link>
          <Link
            to="/propose"
            className="w-full sm:w-auto px-8 py-3.5 border border-gray-600 text-white font-medium rounded-lg"
          >
            Propose a Workshop
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4">
        <div className="bg-gray-800 border border-gray-700 rounded-lg max-w-6xl mx-auto py-8 md:py-12 px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Workshops Conducted" },
              { value: "50k+", label: "Students Trained" },
              { value: "200+", label: "Institutions Enrolled" },
              { value: "15+", label: "Open Source Tools" },
            ].map((stat, i) => (
              <div key={i} className="p-2 md:p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose FOSSEE?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Everything you need to learn, grow and contribute to open-source education.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-8 group">
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-gray-800 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Workshops</h2>
            <p className="text-gray-400">Join our upcoming interactive sessions.</p>
          </div>
          <Link to="/workshops" className="text-blue-400 font-medium inline-flex items-center gap-1 mt-4 md:mt-0">
            View All <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((w) => (
            <div key={w.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                    {w.tag}
                  </span>
                  <span className="text-xs font-bold px-2 py-1 rounded-md bg-gray-800 text-gray-400">
                    {w.seats} / {w.totalSeats} seats
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{w.title}</h3>
                <p className="text-sm text-gray-400 mb-5 line-clamp-2">{w.desc}</p>
                <div className="flex flex-col gap-2 text-sm text-gray-300 mb-6 bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                  <div className="flex items-center gap-2"><span className="text-gray-500">👤</span> {w.instructor}</div>
                  <div className="flex items-center gap-2"><span className="text-gray-500">📅</span> {w.date}</div>
                </div>
              </div>
              <Link
                to={`/workshops/${w.id}`}
                className="w-full block text-center py-3 bg-blue-600 text-white font-medium rounded-lg"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works / Steps */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5 backdrop-blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 relative">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 z-10 relative">1</div>
              <h3 className="text-white font-bold mb-2 text-lg">Find a Workshop</h3>
              <p className="text-sm text-gray-400">Browse our library of open-source tools and topics.</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 relative">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 z-10 relative">2</div>
              <h3 className="text-white font-bold mb-2 text-lg">Register for Free</h3>
              <p className="text-sm text-gray-400">Create an account and book your spot instantly.</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 relative">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 z-10 relative">3</div>
              <h3 className="text-white font-bold mb-2 text-lg">Learn & Certify</h3>
              <p className="text-sm text-gray-400">Attend the session and earn your IIT Bombay certificate.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;