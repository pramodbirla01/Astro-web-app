import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
function TopBar() {
  return (
    <div className='min-h-28 max-h-60 pb-10  bg-gray-950 flex flex-wrap justify-center items-center text-white gap-5 md:gap-10 w-full px-4 pt-2  md:pb-0 md:px-0'>
      {/* Logo */}
      <div className="flex justify-center">
        <img className='w-2/4' src="https://dtaugury.wpengine.com/wp-content/uploads/2020/01/logo-1.png" alt="" />
      </div>

      {/* Reach Us */}
      <div className="flex   items-center gap-6 font-semibold sm:flex"> 
  <Link to="/location"><i className="ri-map-pin-line text-2xl font-thin border-2 border-gray-400 py-3 px-4 rounded-full hover:bg-yellow-300 hover:border-transparent hover:text-black"></i></Link> 
        <div className="hidden lg:block"> {/* Hide text on small screens */}
          <span className='text-xl'>Reach us</span>
          <p className='font-thin text-sm'>113, JA Street, USA</p>
        </div>
        
      </div>

      {/* Call Us */}
      <div className="flex items-center gap-6 font-semibold sm:flex ">
       <Link to="/contacts"><i className="ri-phone-line text-2xl font-thin border-2 border-gray-400 py-3 px-4 rounded-full hover:bg-yellow-300 hover:border-transparent hover:text-black"></i></Link> 
        <div className="hidden lg:block"> {/* Hide text on small screens */}
          <span className='text-xl'>Call Us</span>
          <p className='font-thin text-sm'>+1 234 567 890</p>
        </div>
      </div>

      {/* Appointment Button */}
      <Link to="/appointment"><div className="block rounded-full border-2 border-gray-400 font-semibold text-base py-2 px-8 hover:bg-yellow-300 hover:border-transparent hover:text-black cursor-pointer">
       <h1 className='hidden lg:block'>Appointment</h1>
        <h1 className='block lg:hidden'><i class="ri-bookmark-3-line"></i></h1>
      </div></Link>

      {/* Profile */}
      <div className="relative cursor-pointer">
        <img className="w-14 h-14 rounded-full border-4 border-white object-cover" src="https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-attends-marvel-studios-thor-love-and-news-photo-1709740913.jpg?crop=0.891xw:0.781xh;0.0380xw,0.00605xh&resize=640:*" alt="Profile" />
        <div className="absolute bottom-0 right-0 bg-white text-gray-900 w-5 h-5 flex justify-center items-center rounded-full">
          <i className="ri-add-line hover:text-red-300"></i>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
