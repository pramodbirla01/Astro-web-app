import React from 'react';

function Footer() {
  return (
    <footer
      className="bg-black text-white py-10 px-5 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        {/* Column 1: Tarot Prediction Horoscope */}
        <div className='flex flex-col items-center'>
          <h2 className="text-xl font-serif font-bold">Tarot, Prediction Horoscope</h2>
          <button className="mt-5 px-6 py-2 bg-transparent border-2 text-white font-semibold rounded-full hover:bg-yellow-200 hover:text-black hover:border-transparent">
            Fix Appointment
          </button>
        </div>

        {/* Column 2: Logo and Copyright */}
        <div className="flex flex-col items-center">
          <img src="https://dtaugury.wpengine.com/wp-content/uploads/2020/01/logo-1.png" alt="Logo" className="mx-auto w-44 mb-4 object-cover" />
          <h3 className="text-xl font-thin">Astrology reveals the will of the gods</h3>
          <p className="mt-6 pt-6 border-t border-gray-600">
            © 2023 All rights reserved.
          </p>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="flex flex-col items-center mt-10 font-serif">
          <h3 className="text-xl font-semibold mb-4">Follow us on social media</h3>
          <div className="flex justify-center space-x-4 opacity-90">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square text-3xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square text-3xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square text-3xl"></i>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
