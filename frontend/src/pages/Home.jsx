import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Animated counter hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

function StatCard({ value, label, suffix = "+" }) {
  const count = useCounter(value);
  return (
    <div className="glass rounded-2xl p-6 text-center glow-sm">
      <p className="text-3xl font-bold gradient-text">
        {count}{suffix}
      </p>
      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </div>
  );
}

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const features = [
    { icon: "🎓", title: "Expert Instructors", desc: "Learn from professors at IITs and top institutions across India." },
    { icon: "💻", title: "Hands-on Training", desc: "Practical experience with Python, Scilab, Django and more." },
    { icon: "📱", title: "Mobile Friendly", desc: "Access workshops and book your spot from any device." },
    { icon: "🌍", title: "Free & Open", desc: "All workshops are free and open for students across India." },
    { icon: "🏆", title: "Certificates", desc: "Get certified after completing each workshop successfully." },
    { icon: "⚡", title: "Fast Booking", desc: "Book your spot in seconds with our streamlined process." },
  ];

  const workshops = [
    { tag: "Python", title: "Python for Beginners", instructor: "Prof. Anil Kumar", date: "Apr 15, 2026", color: "from-yellow-500 to-orange-500" },
    { tag: "Scilab", title: "Scilab Fundamentals", instructor: "Prof. Meena Shah", date: "Apr 20, 2026", color: "from-green-500 to-teal-500" },
    { tag: "Django", title: "Advanced Django", instructor: "Prof. Rahul Verma", date: "May 1, 2026", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">

        {/* Background Blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className={`relative text-center max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-purple-300 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            IIT Bombay Initiative
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Learn with{" "}
            <span className="gradient-text">FOSSEE</span>
            <br />
            Workshops
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Explore, book, and propose workshops on open-source tools.
            Empowering students and educators across India — completely free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/workshops"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all glow animate-pulse-glow"
            >
              Browse Workshops →
            </Link>
            <Link
              to="/propose"
              className="glass text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Propose a Workshop
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-gray-600">
            <span className="text-xs">Scroll to explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value={500} label="Workshops Conducted" />
          <StatCard value={50000} label="Students Trained" suffix="+" />
          <StatCard value={200} label="Institutions" suffix="+" />
          <StatCard value={15} label="Open Source Tools" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">FOSSEE?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to learn, grow and contribute to open-source education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">
            Featured <span className="gradient-text">Workshops</span>
          </h2>
          <Link to="/workshops" className="text-purple-400 text-sm hover:text-purple-300 transition">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden hover:glow transition-all duration-300 hover:-translate-y-1">
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${w.color} p-6`}>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {w.tag}
                </span>
                <h3 className="text-white font-bold text-lg mt-3">{w.title}</h3>
                <p className="text-white/70 text-sm mt-1">by {w.instructor}</p>
              </div>

              {/* Card Body */}
              <div className="p-5 flex items-center justify-between">
                <p className="text-gray-400 text-sm">📅 {w.date}</p>
                <Link
                  to="/workshops"
                  className="text-xs bg-white/10 text-white px-3 py-1.5 rounded-full hover:bg-white/20 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to start learning?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of students already learning open-source tools with FOSSEE.
            </p>
            <Link
              to="/register"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-10 py-4 rounded-full hover:opacity-90 transition glow inline-block"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;