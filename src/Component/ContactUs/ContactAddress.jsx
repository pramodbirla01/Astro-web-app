import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Icons from react-icons library

function ContactAddress() {
  return (
    <div className="bg-black text-white min-h-fit py-16 px-6">
      {/* Top Heading */}
      <div className="text-center">
        <h2 className="text-yellow-200 text-2xl mb-4">connect us</h2>
        <h1 className="text-4xl md:text-5xl font-semibold mb-8">Get in touch</h1>
      </div>

      {/* Three Columns with Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:border-gray-400 py-8">
        {/* Column 1: Phone */}
        <div className="flex flex-col items-center space-y-4">
          <FaPhoneAlt className="text-yellow-200 text-4xl  hover:rotate-45 cursor-pointer" />
          <div className="text-lg text-center">
            <p>Phone:</p>
            <p>1234-244-12354</p>
            <p>Two Types</p>
          </div>
        </div>

        {/* Column 2: Address */}
        <div className="flex flex-col items-center space-y-4 md:border-l md:border-r md:border-gray-400 px-6">
          <FaMapMarkerAlt className="text-yellow-200 text-4xl hover:animate-bounce cursor-pointer" />
          <div className="text-lg text-center">
            <p>Address:</p>
            <p>123 Main St, City, Country</p>
          </div>
        </div>

        {/* Column 3: Email */}
        <div className="flex flex-col items-center space-y-4">
          <FaEnvelope className="text-yellow-200 text-4xl hover: origin-bottom hover:-rotate-12" />
          <div className="text-lg text-center">
            <p>Email:</p>
            <p>email1@example.com</p>
            <p>email2@example.com</p>
          </div>
        </div>
      </div>
      <div className='text-center pt-20'>
        <h1 className='md:font-semibold font-medium text-2xl md:text-3xl pb-10'> <em> "If you have any question <br /> Please do not hestitate to send us a message"</em></h1>
      </div>
    </div>
  );
}

export default ContactAddress;
