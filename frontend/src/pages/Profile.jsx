import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const user = {
    name: "Devansh Patel",
    email: "devanshpatel6679@gmail.com",
    username: "devansh_1896",
    role: "Student",
    institute: "VIT BHOPAL",
    joined: "September 2024",
    workshops: [
      { id: 1, title: "Python for Beginners", date: "April 15, 2026", status: "Upcoming", colorClass: "text-amber-500 bg-amber-500/10" },
      { id: 2, title: "Scilab Fundamentals", date: "March 10, 2026", status: "Completed", colorClass: "text-green-500 bg-green-500/10" },
      { id: 3, title: "Linux Essentials", date: "February 5, 2026", status: "Completed", colorClass: "text-green-500 bg-green-500/10" },
      { id: 4, title: "OpenFOAM Workshop", date: "January 20, 2026", status: "Cancelled", colorClass: "text-red-500 bg-red-500/10" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <p className="text-gray-400 mt-1">Manage your account and registered workshops.</p>
          </div>
          <button className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white hover:bg-gray-700 transition">
            Edit Profile
          </button>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white flex-shrink-0">
            {user.name.charAt(0)}
          </div>

          <div className="flex-grow text-center md:text-left space-y-2">
            <div>
              <h2 className="text-2xl font-bold text-white">{user.name}</h2>
              <p className="text-gray-400 text-sm">@{user.username} • {user.email}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2 text-sm text-gray-300">
              <span className="px-2 py-1 bg-gray-700 rounded border border-gray-600">{user.role}</span>
              <span className="px-2 py-1 bg-gray-700 rounded border border-gray-600">🏛 {user.institute}</span>
              <span className="px-2 py-1 bg-gray-700 rounded border border-gray-600">📅 Joined {user.joined}</span>
            </div>
          </div>

          <div className="flex w-full md:w-auto md:flex-col justify-around gap-4 md:gap-6 border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white">{user.workshops.length}</p>
              <p className="text-gray-400 text-xs">Total</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-400">{user.workshops.filter(w => w.status === "Completed").length}</p>
              <p className="text-gray-400 text-xs">Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-400">{user.workshops.filter(w => w.status === "Upcoming").length}</p>
              <p className="text-gray-400 text-xs">Upcoming</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">My Workshops</h3>
          <div className="grid gap-4">
            {user.workshops.map((w) => (
              <div
                key={w.id}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-white font-medium">{w.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">📅 {w.date}</p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0 justify-between md:justify-end">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${w.colorClass}`}>
                    {w.status}
                  </span>
                  <Link
                    to={w.id <= 6 ? `/workshops/${w.id}` : "#"}
                    className="text-sm p-2 text-blue-400 hover:text-blue-300 hover:bg-gray-700 rounded transition"
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