import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const workshops = [
  {
    id: 1,
    title: "Python for Beginners",
    instructor: "Prof. Anil Kumar",
    date: "April 15, 2026",
    location: "IIT Bombay",
    seats: 30,
    totalSeats: 50,
    tag: "Python",
    level: "Beginner",
    description: "This workshop introduces students to Python programming from scratch. Topics include variables, loops, functions, file handling, and basic libraries like NumPy and Matplotlib. By the end you will be able to write clean, readable Python scripts.",
    prerequisites: "No prior programming experience required. A laptop with Python 3 installed is sufficient.",
    schedule: [
      { day: "Day 1 – Morning", topic: "Python Basics" },
      { day: "Day 1 – Afternoon", topic: "Functions & Files" },
      { day: "Day 2 – Morning", topic: "NumPy Fundamentals" },
    ]
  },
  {
    id: 2,
    title: "Scilab Fundamentals",
    instructor: "Prof. Meena Shah",
    date: "April 20, 2026",
    location: "IIT Madras",
    seats: 12,
    totalSeats: 40,
    tag: "Scilab",
    level: "Intermediate",
    description: "Learn the basics of Scilab, a powerful open-source alternative to MATLAB. Covers matrix operations, 2D/3D plotting and introductory numerical simulations.",
    prerequisites: "Basic knowledge of mathematics and linear algebra is recommended.",
    schedule: [
      { day: "Morning", topic: "Scilab Syntax & Matrices" },
      { day: "Afternoon", topic: "Plotting & Signal Processing" },
    ]
  },
  {
    id: 3,
    title: "Advanced Django Dev",
    instructor: "Prof. Rahul Verma",
    date: "May 1, 2026",
    location: "IIT Delhi",
    seats: 8,
    totalSeats: 35,
    tag: "Django",
    level: "Advanced",
    description: "Build production-ready web applications with Django REST Framework, OAuth2 authentication, Docker containerisation, and cloud deployment on AWS.",
    prerequisites: "Solid understanding of Python and basic Django (views, models, URLs).",
    schedule: [
      { day: "Day 1", topic: "DRF Deep Dive" },
      { day: "Day 2", topic: "Auth Systems" },
      { day: "Day 3", topic: "Docker & Deployment" },
    ]
  },
  {
    id: 4,
    title: "Data Science with Python",
    instructor: "Prof. Priya Nair",
    date: "May 10, 2026",
    location: "IIT Kharagpur",
    seats: 35,
    totalSeats: 60,
    tag: "Python",
    level: "Intermediate",
    description: "Explore data science — from ingesting and cleaning raw data with Pandas, to statistical exploration and building predictive models with Scikit-learn.",
    prerequisites: "Basic Python knowledge. No prior machine learning experience needed.",
    schedule: [
      { day: "Day 1", topic: "Pandas & EDA" },
      { day: "Day 2", topic: "Machine Learning with Scikit-learn" },
    ]
  },
  {
    id: 5,
    title: "Linux Essentials",
    instructor: "Prof. Suresh Iyer",
    date: "May 15, 2026",
    location: "IIT Roorkee",
    seats: 40,
    totalSeats: 55,
    tag: "Linux",
    level: "Beginner",
    description: "Get comfortable with the Linux command line. Covers file system navigation, process management, networking tools, and bash scripting.",
    prerequisites: "No prior Linux experience required.",
    schedule: [
      { day: "Morning", topic: "Shell Basics" },
      { day: "Afternoon", topic: "Bash Scripting" },
    ]
  },
  {
    id: 6,
    title: "OpenFOAM Workshop",
    instructor: "Prof. Deepak Joshi",
    date: "May 20, 2026",
    location: "IIT Kanpur",
    seats: 7,
    totalSeats: 30,
    tag: "OpenFOAM",
    level: "Advanced",
    description: "An intensive workshop on CFD using OpenFOAM. From geometry preparation to post-processing in ParaView.",
    prerequisites: "Background in fluid mechanics and basic Linux knowledge.",
    schedule: [
      { day: "Day 1", topic: "CFD Theory" },
      { day: "Day 2", topic: "Meshing" },
      { day: "Day 3", topic: "Solvers & ParaView" },
    ]
  }
];

function WorkshopDetails() {
  const { id } = useParams();
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const workshop = workshops.find(w => w.id === parseInt(id)) || workshops[0];

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-6">

        <div>
          <Link to="/workshops" className="text-blue-400 text-sm mb-4 inline-block">
            &larr; Back to Workshops
          </Link>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8">
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">{workshop.tag}</span>
              <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">{workshop.level}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{workshop.title}</h1>
            <p className="text-gray-400 text-sm mb-6">Instructor: {workshop.instructor}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-700">
              <div>
                <p className="text-xs text-gray-500 uppercase">Date</p>
                <p className="text-sm text-gray-300 mt-1">{workshop.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Location</p>
                <p className="text-sm text-gray-300 mt-1">{workshop.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Seats Left</p>
                <p className="text-sm mt-1 text-gray-300">
                  {workshop.seats} / {workshop.totalSeats}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-lg font-bold text-white mb-2">About this Workshop</h2>
                <p className="text-sm text-gray-300 leading-relaxed">{workshop.description}</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">Prerequisites</h2>
                <p className="text-sm text-gray-300 leading-relaxed">{workshop.prerequisites}</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">Schedule</h2>
                <ul className="space-y-3">
                  {workshop.schedule.map((s, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-l-2 border-blue-500 pl-3">
                      <span className="text-sm font-semibold text-gray-300 w-32 shrink-0">{s.day}</span>
                      <span className="text-sm text-gray-400">{s.topic}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setBooked(true)}
                disabled={booked}
                className={`w-full py-3 rounded-md font-medium text-white ${booked
                    ? "bg-green-600 border border-green-500 cursor-default"
                    : "bg-blue-600"
                  }`}
              >
                {booked ? "✓ You are registered" : "Book This Workshop"}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WorkshopDetails;