import React from 'react';

function AppointmentForm() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center pt-20 pb-20 text-white">
      <div className="w-full max-w-6xl p-6 bg-black">
        {/* Form Heading */}
        <h1 className="text-4xl font-thin text-center md:font-bold md:text-start mb-24">Make an Appointment</h1>

        {/* Form Fields */}
        <form>
          {/* Select Service and Staff */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2  gap-4">
            {/* Select Service */}
            <div className='mr-1'>
              <label className="block mb-2 ml-4 font-bold text-2xl" htmlFor="service">
                Select Service
              </label>
              <select
                id="service"
                className="w-full p-3 bg-black border-b-2 border-gray-300 text-xl focus:outline-none focus:border-yellow-200"
              >
                <option>Zodiac Astrology</option>
                <option>Western Astrology</option>
                <option>Indian Astrology</option>
                <option>Love Astrology</option>
                {/* Add more options as needed */}
                <option>Your Astrology</option>
              </select>
            </div>

            {/* Select Staff */}
            <div>
              <label className="block mb-2 ml-4 font-bold text-2xl" htmlFor="staff">
                Select Staff
              </label>
              <select
                id="staff"
                className="w-full p-3 bg-black border-b-2 text-xl border-gray-300 focus:outline-none focus:border-yellow-200"
              >
                <option>John Doe - $50</option>
                <option>Jane Smith - $75</option>
                <option>Michael Johnson - $100</option>
                {/* Add more staff members as needed */}
              </select>
            </div>
          </div>

          {/* Date and Time */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Date Field */}
            <div>
              <label className="block mb-2 text-xl font-semibold" htmlFor="date">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-3 bg-black border-b-2 text-2xl font-thin border-gray-300 focus:outline-none focus:border-yellow-200"
              />
            </div>

            {/* Start Time */}
            <div>
              <label className="block mb-2 text-xl font-semibold" htmlFor="startTime">
                Start Time
              </label>
              <select
                id="startTime"
                className="w-full p-3 bg-black border-b-2 text-2xl font-thin border-gray-300 focus:outline-none focus:border-yellow-200"
              >
                {/* AM Time Slots */}
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i}>{`${i + 1}:00 AM`}</option>
                ))}
                {/* PM Time Slots */}
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i}>{`${i + 1}:00 PM`}</option>
                ))}
              </select>
            </div>

            {/* End Time */}
            <div>
              <label className="block mb-2 text-xl font-semibold" htmlFor="endTime">
                End Time
              </label>
              <select
                id="endTime"
                className="w-full p-3 bg-black border-b-2 text-2xl font-thin border-gray-300 focus:outline-none focus:border-yellow-200"
              >
                {/* AM Time Slots */}
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i}>{`${i + 1}:00 AM`}</option>
                ))}
                {/* PM Time Slots */}
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i}>{`${i + 1}:00 PM`}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Show Time Button */}
          <div className="text-center">
            <button
              type="button"
              className="mt-20 px-8 py-3 text-lg border-2 border-white text-white rounded-full hover:bg-yellow-200 hover:text-black transition-all"
            >
              Show Time
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
