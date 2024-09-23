import React from 'react';

function Achivment() {
  return (
    <div className="bg-black flex pl-4 justify-center pb-10 md:gap-10 md:py-10 overflow-x-auto">
      <div className="flex items-center pl-96  md:pl-0 space-x-6 md:space-x-10 min-w-max">
        {/* Planet 1 */}
        <div className="relative text-center flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1668121973202-48ea7214a700?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbiUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Planet 1"
            className="w-24 h-24 md:w-40 md:h-40 opacity-40 rounded-full animate-spinSlow"
          />
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gray-200 px-2 py-1 rounded-full text-lg md:text-3xl font-bold">
            79+
          </span>
          <p className="mt-2 text-white text-xs md:text-xl font-bold whitespace-normal md:whitespace-nowrap">
            Trusted by <br /> Million Clients
          </p>
        </div>

        {/* Vertical Separator */}
        <div className="h-20 md:h-40 border-l-2 border-yellow-400"></div>

        {/* Planet 2 */}
        <div className="relative text-center flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1668121973202-48ea7214a700?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbiUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Planet 2"
            className="w-24 h-24 md:w-40 md:h-40 opacity-40 rounded-full animate-spinSlow"
          />
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gray-200 px-2 py-1 rounded-full text-lg md:text-3xl font-bold">
            20
          </span>
          <p className="mt-2 text-white text-xs md:text-xl font-bold">
            Years of<br />Experience
          </p>
        </div>

        {/* Vertical Separator */}
        <div className="h-20 md:h-40 border-l-2 border-yellow-400"></div>

        {/* Planet 3 */}
        <div className="relative text-center flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1668121973202-48ea7214a700?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbiUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Planet 3"
            className="w-24 h-24 md:w-40 md:h-40 opacity-40 rounded-full animate-spinSlow"
          />
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gray-200 px-2 py-1 rounded-full text-lg md:text-3xl font-bold">
            50
          </span>
          <p className="mt-2 text-white text-xs md:text-xl font-bold">Types of<br /> Horoscope</p>
        </div>

        {/* Vertical Separator */}
        <div className="h-20 md:h-40 border-l-2 border-yellow-400"></div>

        {/* Planet 4 */}
        <div className="relative text-center flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1668121973202-48ea7214a700?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbiUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Planet 4"
            className="w-24 h-24 md:w-40 md:h-40 opacity-40 rounded-full animate-spinSlow"
          />
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gray-200 px-2 py-1 rounded-full text-lg md:text-3xl font-bold">
            100+
          </span>
          <p className="mt-2 text-white text-xs md:text-xl font-bold">Qualified <br />Astrologer</p>
        </div>

        {/* Vertical Separator */}
        <div className="h-20 md:h-40 border-l-2 border-yellow-400"></div>

        {/* Planet 5 */}
        <div className="relative text-center flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1668121973202-48ea7214a700?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbiUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Planet 5"
            className="w-24 h-24 md:w-40 md:h-40 opacity-40 rounded-full animate-spinSlow"
          />
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gray-200 px-2 py-1 rounded-full text-lg md:text-3xl font-bold">
            86
          </span>
          <p className="mt-2 text-white text-xs md:text-xl font-bold">Success <br />Horoscope</p>
        </div>
      </div>
    </div>
  );
}

export default Achivment;
