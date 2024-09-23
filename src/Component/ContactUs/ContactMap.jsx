import React from 'react';

function ContactMap() {
  return (
    <div className="bg-black min-h-fit text-white flex justify-center items-center pt-36 px-8 py-12 ">
      <div className="w-full max-w-6xl">
        {/* Map Heading */}
        <h1 className="text-center text-5xl font-semibold text-cyan-200 mb-14">Our Location</h1>

        {/* Google Map */}
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.032258888929!2d-122.42067908468112!3d37.77492957975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0c70e8a1%3A0xd1c1c0cdd2d8a1e1!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617392015765!5m2!1sen!2sus" // Replace with actual Google Maps embed link
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="rounded-sm shadow-lg opacity-75 md:opacity-50 hover:opacity-100 duration-200 transition-all"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;
