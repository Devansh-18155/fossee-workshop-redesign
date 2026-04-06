function ProposeWorkshop() {
  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#d1d5db',
    marginBottom: '6px',
  };

  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }} className="px-4 py-24">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-purple-300 mb-4"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
            ✨ Share your knowledge
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            Propose a <span className="gradient-text">Workshop</span>
          </h1>
          <p className="text-gray-400">Fill in the details and our team will review your proposal</p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div>
              <label style={labelStyle}>Workshop Title</label>
              <input type="text" placeholder="e.g. Python for Data Science" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Workshop Type</label>
              <select style={{ ...inputStyle, cursor: 'pointer' }}>
                <option value="" style={{ background: '#1a1a2e' }}>Select a type</option>
                <option value="python" style={{ background: '#1a1a2e' }}>Python</option>
                <option value="scilab" style={{ background: '#1a1a2e' }}>Scilab</option>
                <option value="django" style={{ background: '#1a1a2e' }}>Django</option>
                <option value="linux" style={{ background: '#1a1a2e' }}>Linux</option>
                <option value="other" style={{ background: '#1a1a2e' }}>Other</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Proposed Date</label>
                <input type="date" style={{ ...inputStyle, colorScheme: 'dark' }} />
              </div>
              <div>
                <label style={labelStyle}>Duration</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="" style={{ background: '#1a1a2e' }}>Select</option>
                  <option value="1" style={{ background: '#1a1a2e' }}>1 Day</option>
                  <option value="2" style={{ background: '#1a1a2e' }}>2 Days</option>
                  <option value="3" style={{ background: '#1a1a2e' }}>3 Days</option>
                  <option value="5" style={{ background: '#1a1a2e' }}>5 Days</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Location / Institute</label>
              <input type="text" placeholder="e.g. IIT Bombay" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Expected Participants</label>
              <input type="number" placeholder="e.g. 30" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Workshop Description</label>
              <textarea
                rows={4}
                placeholder="Briefly describe the workshop objectives and content..."
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>

            <button
              className="w-full py-4 rounded-2xl font-semibold text-white text-base hover:opacity-90 transition glow"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
            >
              Submit Proposal ✨
            </button>

            <p className="text-center text-xs text-gray-500">
              Your proposal will be reviewed within 3-5 working days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProposeWorkshop;