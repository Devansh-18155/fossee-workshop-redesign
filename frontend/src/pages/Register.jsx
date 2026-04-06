import { Link } from "react-router-dom";

function Register() {
  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#d1d5db',
    marginBottom: '6px',
  };

  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }} className="px-4 py-24 flex items-center justify-center">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
            F
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400 text-sm">Join the FOSSEE Workshop Portal</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <input type="text" placeholder="John" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input type="text" placeholder="Doe" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input type="email" placeholder="you@example.com" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Username</label>
              <input type="text" placeholder="johndoe123" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Password</label>
              <input type="password" placeholder="••••••••" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Confirm Password</label>
              <input type="password" placeholder="••••••••" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Role</label>
              <select style={{ ...inputStyle, cursor: 'pointer' }}>
                <option value="" style={{ background: '#1a1a2e' }}>Select your role</option>
                <option value="student" style={{ background: '#1a1a2e' }}>Student</option>
                <option value="instructor" style={{ background: '#1a1a2e' }}>Instructor</option>
                <option value="coordinator" style={{ background: '#1a1a2e' }}>Coordinator</option>
              </select>
            </div>

            <button
              className="w-full py-3.5 rounded-2xl font-semibold text-white hover:opacity-90 transition glow mt-2"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
            >
              Create Account
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 font-medium hover:text-purple-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;