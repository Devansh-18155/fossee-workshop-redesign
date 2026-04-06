import { Link } from "react-router-dom";

function ProposeWorkshop() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Propose a Workshop</h1>
        <p className="text-gray-500 mt-2 text-sm">
          Fill in the details below to propose a new workshop for FOSSEE
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow p-8 space-y-5">

        {/* Workshop Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Workshop Title
          </label>
          <input
            type="text"
            placeholder="e.g. Python for Data Science"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Workshop Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Workshop Type
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select a type</option>
            <option value="python">Python</option>
            <option value="scilab">Scilab</option>
            <option value="django">Django</option>
            <option value="linux">Linux</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Proposed Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select duration</option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location / Institute
          </label>
          <input
            type="text"
            placeholder="e.g. IIT Bombay"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Expected Participants */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expected Number of Participants
          </label>
          <input
            type="number"
            placeholder="e.g. 30"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Workshop Description
          </label>
          <textarea
            rows={4}
            placeholder="Briefly describe the workshop objectives and content..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold text-base hover:bg-blue-600 transition">
          Submit Proposal
        </button>

        <p className="text-center text-xs text-gray-400">
          Your proposal will be reviewed by the FOSSEE team within 3-5 working days.
        </p>
      </div>
    </div>
  );
}

export default ProposeWorkshop;