import { useState } from "react";

const TOOL_OPTIONS = [
  "Python", "Scilab", "Django", "Linux", "OpenFOAM",
  "R Programming", "Julia", "Octave", "C++", "Other",
];

const DURATION_OPTIONS = ["Half Day (4 hrs)", "1 Day", "2 Days", "3 Days", "5 Days", "Custom"];
const LEVEL_OPTIONS = ["Beginner", "Intermediate", "Advanced"];

function ProposeWorkshop() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "", tool: "", date: "", duration: "", level: "",
    location: "", instructor: "", email: "", participants: "", description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-900/30 border border-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✅
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Proposal Submitted!</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Thank you. Our FOSSEE team will review your proposal and get back to you within 3-5 working days.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ title: "", tool: "", date: "", duration: "", level: "", location: "", instructor: "", email: "", participants: "", description: "" });
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Submit Another Proposal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Propose a Workshop</h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Share your expertise with thousands of students across India completely free, backed by IIT Bombay.
          </p>
        </div>

        <div className="flex justify-center">

          <div className="w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Workshop Title *</label>
                <input
                  type="text" name="title" value={form.title} onChange={handleChange} required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Tool/Topic *</label>
                  <select name="tool" value={form.tool} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Tool</option>
                    {TOOL_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Difficulty Level *</label>
                  <select name="level" value={form.level} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Level</option>
                    {LEVEL_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Proposed Date *</label>
                  <input
                    type="date" name="date" value={form.date} onChange={handleChange} required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Duration *</label>
                  <select name="duration" value={form.duration} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Duration</option>
                    {DURATION_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Location / Institute *</label>
                <input
                  type="text" name="location" value={form.location} onChange={handleChange} required placeholder="e.g. IIT Bombay"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Instructor Name *</label>
                  <input
                    type="text" name="instructor" value={form.instructor} onChange={handleChange} required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Contact Email *</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Workshop Description *</label>
                <textarea
                  name="description" value={form.description} onChange={handleChange} required rows={4}
                  placeholder="Describe your workshop objectives..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors mt-6"
              >
                Submit Proposal
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProposeWorkshop;