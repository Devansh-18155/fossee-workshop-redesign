function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe123",
    role: "Student",
    institute: "IIT Bombay",
    joined: "January 2025",
    workshops: [
      { id: 1, title: "Python for Beginners", date: "April 15, 2026", status: "Upcoming" },
      { id: 2, title: "Scilab Fundamentals", date: "March 10, 2026", status: "Completed" },
      { id: 3, title: "Linux Essentials", date: "February 5, 2026", status: "Completed" },
    ],
  };

  const statusColors = {
    Upcoming: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Profile Card */}
      <div className="bg-blue-700 text-white rounded-2xl p-8 mb-6 flex flex-col sm:flex-row items-center gap-6">
        
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-white text-blue-700 flex items-center justify-center text-3xl font-bold shrink-0">
          {user.name.charAt(0)}
        </div>

        {/* Info */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-blue-200 text-sm">@{user.username}</p>
          <p className="text-blue-200 text-sm mt-1">{user.email}</p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-3">
            <span className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              {user.role}
            </span>
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              {user.institute}
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <button className="sm:ml-auto border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Workshops", value: user.workshops.length },
          { label: "Completed", value: user.workshops.filter(w => w.status === "Completed").length },
          { label: "Upcoming", value: user.workshops.filter(w => w.status === "Upcoming").length },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Workshops Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">My Workshops</h2>
        <div className="space-y-3">
          {user.workshops.map((w) => (
            <div
              key={w.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition"
            >
              <div>
                <p className="font-semibold text-gray-800 text-sm">{w.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">📅 {w.date}</p>
              </div>
              <span className={`mt-2 sm:mt-0 text-xs font-semibold px-3 py-1 rounded-full w-fit ${statusColors[w.status]}`}>
                {w.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;