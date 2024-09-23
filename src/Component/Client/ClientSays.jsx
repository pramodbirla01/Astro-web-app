import React from 'react';

function ClientSays() {
  return (
    <div className="bg-black min-h-fit md:h-screen text-white py-10 px-5">
      {/* Top Lorem Ipsum Section */}
      <p className="text-yellow-200 md:pt-14 text-lg md:text-2xl font-light text-center">
        Lorem ipsum 
      </p>

      {/* What Client Says Heading */}
      <h1 className="text-white text-2xl md:text-4xl text-center font-bold mt-4">
        What My Clients Say
      </h1>

      {/* Moon Image on the Right */}
      <div className="relative md:mt-10">
        <div className="absolute hidden md:block -top-64 right-20">
          <img
            src="https://i.pinimg.com/originals/bd/c4/c3/bdc4c36587b7122d4ff30718f440800e.png"
            alt="Moon"
            className="h-96 opacity-35 rounded-full"
          />
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="mt-20 md:mt-28 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:gap-36 justify-items-center">
          {/* Client 1 */}
          <div className="text-center w-44">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRmFFBaeKrg20olLq4nsf7KcfbGVsbvOr8Q&s"
              alt="Client 1"
              className="w-20 h-20 mx-auto rounded-full border-2 border-white object-cover"
            />
            <p className="mt-4">
              "Lorem ipsum dolor sit amet, consectetur br adipiscing elit. Integer nec odio. Praesent libero."
            </p>
            <p className="mt-2 text-yellow-200 font-semibold">Tom Cruise</p>
            <div className="flex justify-center mt-2 space-x-2">
              <i className="fas fa-moon text-yellow-200"></i>
              <i className="fas fa-arrow-up text-yellow-200"></i>
              <i className="fas fa-circle text-yellow-200"></i>
            </div>
          </div>

          {/* Client 2 */}
          <div className="text-center w-44">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTPJ3BKJ9wyrQWCv3TCGrVTBbA1cYUVsaCHtIdiwLVkL7PeKQVNlTxP2NFFN1hFGCqgA&usqp=CAU"
              alt="Client 2"
              className="w-20 h-20 mx-auto rounded-full border-2 border-white object-cover"
            />
            <p className="mt-4">
              "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            </p>
            <p className="mt-2 text-yellow-200 font-semibold">Henry Cavill</p>
            <div className="flex justify-center mt-2 space-x-2">
              <i className="fas fa-moon text-yellow-200"></i>
              <i className="fas fa-arrow-up text-yellow-200"></i>
              <i className="fas fa-circle text-yellow-200"></i>
            </div>
          </div>

          {/* Client 3 */}
          <div className="text-center w-44 z-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMoikFoRJDTI2iN714Bd-FJzZ5hEVbkncM2AiJ47I5QJMWoxGipJ_vTtSo_3YwXzvYP0&usqp=CAU"
              alt="Client 3"
              className="w-20 h-20 mx-auto rounded-full border-2 border-white object-cover"
            />
            <p className="mt-4">
              "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
            </p>
            <p className="mt-2 text-yellow-200 font-semibold">Jennifer Lawrence</p>
            <div className="flex justify-center mt-2 space-x-2">
              <i className="fas fa-moon text-yellow-200"></i>
              <i className="fas fa-arrow-up text-yellow-200"></i>
              <i className="fas fa-circle text-yellow-200"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSays;
