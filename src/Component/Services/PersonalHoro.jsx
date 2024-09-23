import React from "react";

function PersonalHoro() {
  return (
    <div className="bg-black min-h-fit text-center py-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold text-white">Get Personalized Horoscope</h1>

      {/* Description */}
      <p className="text-xl md:text-2xl text-gray-600 mt-10 px-6 md:max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini.
      </p>

      {/* Cards Section */}
      <div className="flex justify-start pl-10 pr-10 md:justify-center space-x-5 mt-14 overflow-x-scroll md:overflow-hidden">
        {/* Card 1 */}
        <button className="bg-white md:p-6 p-20 w-64 md:h-80  shadow-lg rounded-sm text-gray-800 font-medium hover:bg-transparent hover:text-white hover:border-2 transition duration-300">
          <h2 className="text-xl">Daily Horoscope</h2>
          <p className="mt-2 text-sm text-gray-600">Get insights for your day.</p>
          <button className="mt-24 bg-green-600 px-6 py-2 rounded-full text-white hover:bg-yellow-400 hover:text-black">Order</button>
        </button>

        {/* Card 2 */}
        <button className="bg-white md:p-6 p-20 w-64 md:h-80  shadow-lg rounded-sm text-gray-800 font-medium hover:bg-transparent hover:text-white hover:border-2 transition duration-300">
          <h2 className="text-xl">Weekly Horoscope</h2>
          <p className="mt-2 text-sm text-gray-600">Plan your week ahead.</p>
          <button className="mt-24 bg-green-600 px-6 py-2 rounded-full text-white hover:bg-yellow-400 hover:text-black">Order</button> 
        </button>

        {/* Card 3 */}
        <button className="bg-white md:p-6 p-20 w-64 md:h-80  shadow-lg rounded-sm text-gray-800 font-medium hover:bg-transparent hover:text-white hover:border-2 transition duration-300">
          <h2 className="text-xl">Monthly Horoscope</h2>
          <p className="mt-2 text-sm text-gray-600">Look ahead for the month.</p>
          <button className="mt-24 bg-green-600 px-6 py-2 rounded-full text-white hover:bg-yellow-400 hover:text-black">Order</button>  
        </button>
      </div>
    </div>
  );
}

export default PersonalHoro;
