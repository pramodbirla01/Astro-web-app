import React, { useEffect } from 'react';

function OurService() {
  useEffect(() => {
    const autoScroll = () => {
      const container = document.getElementById('scroll-container');
      let scrollAmount = 0;
      const scrollStep = 2;
      const delay = 50; // Speed of scrolling

      const scrollInterval = setInterval(() => {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          clearInterval(scrollInterval);
        }
      }, delay);
    };

    setTimeout(autoScroll, 2000); // Delay scroll by 2 seconds
  }, []);

  return (
    <div className="relative h-fit bg-black text-center text-white py-20 overflow-hidden">
      {/* Spinning Wheel Image in Background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/823/457/original/seed-flower-of-life-lotus-icon-yantra-mandala-sacred-geometry-tattoo-symbol-of-harmony-and-balance-mystical-talisman-white-lines-isolated-on-black-background-vector.jpg" // Replace with your round image URL
          alt="Spinning Wheel"
          className="md:h-screen opacity-15 animate-spinSlow"
        />
      </div>

      {/* Content */}
      <div className="relative  z-10 space-y-24 md:space-y-8">
        {/* Paragraph */}
        <p className="text-yellow-200 font-light text-lg max-w-3xl mx-auto">
          Lorem ipsum
        </p>

        {/* "Our Services" Heading */}
        <h1 className="text-white font-bold text-4xl md:text-5xl">Our Services</h1>

        {/* Scrollable Card Section */}
        <div className="relative  md:mt-12">
          <div
            id="scroll-container"
            className="flex justify-center space-x-10 overflow-x-auto no-scrollbar  px-6 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Card 1 */}
            <div className="min-w-[250px] h-64 bg-white  text-black p-6 rounded-lg shadow-md text-center">
              <h2 className="font-bold text-xl">Service 1</h2>
              <p className="mt-2 text-sm">Description of Service 1.</p>
            </div>

            {/* Card 2 */}
            <div className="min-w-[250px] bg-white  text-black p-6 rounded-lg shadow-md text-center">
              <h2 className="font-bold text-xl">Service 1</h2>
              <p className="mt-2 text-sm">Description of Service 1.</p>
            </div>

            {/* Card 3 */}
            <div className="min-w-[250px] bg-white text-black p-6 rounded-lg shadow-md text-center">
              <h2 className="font-bold text-xl">Service 2</h2>
              <p className="mt-2 text-sm">Description of Service 2.</p>
            </div>
           
          </div>
        </div>

        {/* "View More" Buttons Section */}
        <div className="flex justify-center items-center pl-14 md:pl-1 space-x-44 mt-8">
          <button className="bg-transparent text-white border-2 border-white md:px-6 py-2 text-xl font-thin rounded-full hover:bg-yellow-200 hover:text-black hover:border-transparent transition-colors duration-300">
            View More
          </button>
          <button className="bg-transparent text-center text-white border-2 border-white px-24 md:px-6 py-2 text-lg md:text-xl font-thin rounded-full hover:bg-yellow-200 hover:text-black hover:border-transparent transition-colors duration-300">
            View More
          </button>
          <button className="bg-transparent text-white border-2 border-white px-6 py-2 text-xl font-thin rounded-full hover:bg-yellow-200 hover:text-black hover:border-transparent transition-colors duration-300">
            View More
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default OurService;
