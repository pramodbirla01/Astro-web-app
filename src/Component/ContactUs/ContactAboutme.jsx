import React from 'react';

function ContactAboutme() {
  return (
    <div className="bg-black min-h-fit text-white flex flex-col justify-center items-center px-8">
      {/* About Me Heading */}
      <h1 className="text-4xl md:text-6xl font-semibold mb-8">About Me</h1>

      {/* Description */}
      <p className="text-center text-2xl mb-16 px-4 lg:px-48">
        <em>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolor. Lorem ipsum dolor sit amet."</em>
      </p>

      {/* Signature and Name Section */}
      <div className="flex flex-col lg:flex-row justify-center  items-center gap-12 mb-12">
        {/* Signature Image */}
        <div className="flex-shrink-0 md:border-r-2 pr-12 border-cyan-300">
          <img
            src="https://dtaugury.wpengine.com/wp-content/uploads/2020/02/signature-1.png" // Replace with actual image source
            alt="Signature"
            className="h-32 w-auto"
          />
        </div>

        {/* Name and Button */}
        <div className="text-center pt-5 ">
          <h2 className="text-yellow-200 text-4xl font-thin uppercase mb-6 md:mb-4">LOUIS RIVERA</h2>

          {/* Fix Appointment Button */}
          <button className="border border-white text-white px-14 py-2 rounded-full transition-all duration-300 hover:bg-yellow-200 hover:text-black">
            Fix Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactAboutme;
