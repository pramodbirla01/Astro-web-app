import React from "react";

function WhatWeDo() {
  return (
    <div className="flex min-h-fit max-h-fit flex-col md:flex-row items-center justify-between bg-black text-justify text-white h-screen p-8">
      {/* Left side with slow spinning image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://dtaugury.wpengine.com/wp-content/uploads/2020/01/moon-sign-3.png" 
          alt="Spinning"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full animate-spinSlow"
        />
      </div>

      {/* Right side with content */}
      <div className="w-screen  md:w-1/2 flex flex-col justify-between ">
      <p className="text-center font-thin text-2xl text-yellow-300 pl-5">Lorem, ipsum.</p>
      <h1 className="text-4xl md:text-6xl text-center font-serif font-bold py-5 pl-6">What we do,</h1>
        <p className="text-2xl md:text-3xl font-thin mb-4 text-wrap px-10 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, similique debitis quos distinctio eos aut voluptatum minus, nam sint eligendi doloremque enim quae!
        </p>

        <div className="flex justify-center mt-4">
          <img
            src="https://img.freepik.com/premium-photo/8-planets-from-our-solar-system-horizontal-layout_1279815-5148.jpg" // Replace with your image URL
            alt="Bottom Image"
            className="min-w-0 px-2 max-w-96 opacity-15  rounded-full animate-pulse  shadow-inner shadow-black"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
