function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe123",
    role: "Student",
    institute: "IIT Bombay",
    joined: "January 2025",
    workshops: [
      { id: 1, title: "Python for Beginners", date: "April 15, 2026", status: "Upcoming", color: "from-yellow-500 to-orange-500" },
      { id: 2, title: "Scilab Fundamentals", date: "March 10, 2026", status: "Completed", color: "from-green-500 to-teal-500" },
      { id: 3, title: "Linux Essentials", date: "February 5, 2026", status: "Completed", color: "from-gray-500 to-slate-600" },
    ],
  };

  const statusColors = {
    Upcoming: { background: 'rgba(234,179,8,0.15)', color: '#fbbf24', border: '1px solid rgba(234,179,8,0.3)' },
    Completed: { background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' },
    Cancelled: { background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
  };

  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }} className="px-4 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Profile Hero Card */}
        <div className="rounded-3xl p-8 mb-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(37,99,235,0.3))', border: '1px solid rgba(255,255,255,0.1)' }}>

          {/* Background blur blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold text-white flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
              {user.name.charAt(0)}
            </div>

            {/* Info */}
            <div className="text-center sm:text-left flex-grow">
              <h1 className="text-3xl font-bold text-white mb-1">{user.name}</h1>
              <p className="text-purple-300 text-sm mb-1">@{user.username}</p>
              <p className="text-gray-400 text-sm mb-4">{user.email}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'rgba(124,58,237,0.4)', border: '1px solid rgba(124,58,237,0.5)' }}>
                  {user.role}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  📍 {user.institute}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  🗓 Joined {user.joined}
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <button className="px-5 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition flex-shrink-0"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              ✏️ Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total Workshops", value: user.workshops.length, icon: "🎓", color: "#a855f7" },
            { label: "Completed", value: user.workshops.filter(w => w.status === "Completed").length, icon: "✅", color: "#4ade80" },
            { label: "Upcoming", value: user.workshops.filter(w => w.status === "Upcoming").length, icon: "⏳", color: "#fbbf24" },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Workshops List */}
        <div className="rounded-3xl p-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="text-xl font-bold text-white mb-5">My Workshops</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {user.workshops.map((w) => (
              <div key={w.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                {/* Color bar */}
                <div className={`w-1.5 h-12 rounded-full bg-gradient-to-b ${w.color} flex-shrink-0`} />

                <div className="flex-grow">
                  <p className="text-white font-semibold text-sm">{w.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">📅 {w.date}</p>
                </div>

                <span className="text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0"
                  style={statusColors[w.status]}>
                  {w.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;