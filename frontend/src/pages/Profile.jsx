import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const user = {
    name: "Devansh Patel",
    email: "devanshpatel6679@gmail.com",
    username: "devansh_1896",
    role: "Student",
    institute: "VIT BHOPAL UNIVERSITY",
    joined: "September 2024",
    workshops: [
      { id: 1, title: "Python for Beginners", date: "April 15, 2026", status: "Upcoming", colorClass: "text-amber-500 bg-amber-500/10" },
      { id: 2, title: "Scilab Fundamentals", date: "March 10, 2026", status: "Completed", colorClass: "text-green-500 bg-green-500/10" },
      { id: 3, title: "Linux Essentials", date: "February 5, 2026", status: "Completed", colorClass: "text-green-500 bg-green-500/10" },
      { id: 4, title: "OpenFOAM Workshop", date: "January 20, 2026", status: "Cancelled", colorClass: "text-red-500 bg-red-500/10" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8 mt-2">

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Profile</h1>
            <p className="text-gray-400">Manage your account and registered workshops.</p>
          </div>
          <button className="w-full md:w-auto px-6 py-3 md:py-2.5 bg-gray-800 border border-gray-600 rounded-lg text-white font-medium">
            Edit Profile
          </button>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white flex-shrink-0 z-10">
            {user.name.charAt(0)}
          </div>

          <div className="flex-grow text-center md:text-left space-y-3 z-10 w-full">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-blue-300 text-sm font-medium">@{user.username} • {user.email}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2 text-sm text-gray-300">
              <span className="px-3 py-1.5 bg-gray-900/60 rounded-md border border-gray-700 shadow-sm">{user.role}</span>
              <span className="px-3 py-1.5 bg-gray-900/60 rounded-md border border-gray-700 shadow-sm">🏛 {user.institute}</span>
              <span className="px-3 py-1.5 bg-gray-900/60 rounded-md border border-gray-700 shadow-sm">📅 Joined {user.joined}</span>
            </div>
          </div>

          <div className="flex w-full md:w-auto md:flex-col justify-around gap-4 md:gap-6 border-t md:border-t-0 md:border-l border-gray-700/50 pt-6 md:pt-0 md:pl-8 text-center bg-gray-900/20 md:bg-transparent rounded-lg p-4 md:p-0 mt-4 md:mt-0 z-10">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">{user.workshops.length}</p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Total</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-green-400">{user.workshops.filter(w => w.status === "Completed").length}</p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-400">{user.workshops.filter(w => w.status === "Upcoming").length}</p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Upcoming</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">My Workshops</h3>
          <div className="grid gap-4">
            {user.workshops.map((w) => (
              <div
                key={w.id}
                className="bg-gray-800 border border-gray-700 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
              >
                <div className="w-full md:w-auto">
                  <h4 className="text-white font-bold text-lg mb-1">{w.title}</h4>
                  <p className="text-gray-400 text-sm flex items-center gap-2">📅 {w.date}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto mt-2 md:mt-0 justify-between md:justify-end">
                  <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md border border-current/20 ${w.colorClass}`}>
                    {w.status}
                  </span>
                  <Link
                    to={w.id <= 6 ? `/workshops/${w.id}` : "#"}
                    className="w-full sm:w-auto text-center text-sm px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg"
                  >
                    {w.status === "Upcoming" ? "View Details" : "View Materials"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;