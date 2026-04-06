import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: "🎓",
      title: "Learn from Experts",
      desc: "Attend workshops conducted by experienced instructors from IITs and top institutions.",
    },
    {
      icon: "💻",
      title: "Hands-on Training",
      desc: "Get practical experience with open-source tools like Python, Scilab, and more.",
    },
    {
      icon: "📱",
      title: "Easy Booking",
      desc: "Book your spot in a workshop in just a few clicks from any device.",
    },
    {
      icon: "🌍",
      title: "Open for All",
      desc: "Free and open workshops available for students and educators across India.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to FOSSEE Workshop Portal
        </h1>
        <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Explore, book, and propose workshops on open-source tools.
          Empowering students and educators across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/workshops"
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Browse Workshops
          </Link>
          <Link
            to="/propose"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Propose a Workshop
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Why FOSSEE Workshops?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Ready to get started?
        </h2>
        <p className="text-gray-500 mb-6">
          Join thousands of students already learning with FOSSEE.
        </p>
        <Link
          to="/register"
          className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Register Now
        </Link>
      </section>
    </div>
  );
}

export default Home;