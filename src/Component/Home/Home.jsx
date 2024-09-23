import React from 'react';

function Home() {
  return (
    <div
      className='relative h-fit py-24 md:h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center'
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
    >
      {/* Pulsing overlay */}
      <div className='absolute  inset-0 bg-black opacity-50 mix-blend-multiply animate-pulse'></div>
      
      {/* Content */}
      <div className='relative z-10 text-white  px-4'>
        <p className='text-lg md:text-2xl font-thin'>Predict Future</p>
        <h1 className='font-semibold text-4xl md:text-6xl py-5 md:py-6'>
          Your path is illuminated by a <br /> road-map of stars
        </h1>
        <button className='text-lg md:text-2xl font-thin border-2 border-white py-2 px-4 md:px-6 rounded-full hover:bg-yellow-300 hover:text-black hover:border-transparent'>
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Home;
