import React, { useState } from "react";

function Blog() {
  // State to track the current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock data for the cards
  const cardData = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Content for blog post 1.",
      pic: "https://dtaugury.wpengine.com/wp-content/uploads/2020/02/blog-13-750x432.jpg",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content: "Content for blog post 2.",
      pic: "https://dtaugury.wpengine.com/wp-content/uploads/2020/02/blog-14-750x432.jpg",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content: "Content for blog post 3.",
      pic: "https://dtaugury.wpengine.com/wp-content/uploads/2020/02/blog-12-750x432.jpg",
    },
    {
      id: 4,
      title: "Blog Post 4",
      content: "Content for blog post 4.",
      pic: "https://dtaugury.wpengine.com/wp-content/uploads/2020/02/blog-10-750x432.jpg",
    },
    {
      id: 5,
      title: "Blog Post 5",
      content: "Content for blog post 5.",
      pic: "https://dtaugury.wpengine.com/wp-content/uploads/2020/02/blog-4-750x432.jpg",
    },
  ];

  const cardsPerPage = 3;

  // Function to handle pagination
  const handleNext = () => {
    if (currentIndex < cardData.length - cardsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-black pt-0   min-h-fit text-white pb-20 ">
      {/* Blog Title */}
      <div
        className="flex justify-center pt-64 pb-44 bg-cover bg-bottom"
        style={{
          backgroundImage: `url('https://dtaugury.wpengine.com/wp-content/uploads/2020/02/blog-14-750x432.jpg')`,
        }}
      >
        <h1 className="text-6xl font-semibold font-mono ">Blog</h1>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center mt-16 pb-14  overflow-x-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3   gap-4 max-w-5xl">
          {cardData
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((card) => (
              <div
                key={card.id}
                className="bg-black relative text-white font-thin overflow-hidden mb-10 md:mb-0 pt-0 flex flex-col items-center justify-start  text-center rounded-sm h-64 w-72  border-b-2"
              >
                <div className="">
                  <img src={card.pic} alt="" />
                </div>
                <div className="w-4/5 h-1/2 top-1/2 absolute z-10  pt-4  bg-black shadow-lg shadow-white">
                  <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                  <p>{card.content}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`px-4 py-2 bg-transparent border-2 border-white text-white rounded-full ${
            currentIndex === 0
              ? "opacity-50"
              : "hover:bg-yellow-200 hover:text-black"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= cardData.length - cardsPerPage}
          className={`px-4 py-2 bg-transparent border-2 border-white text-white rounded-full ${
            currentIndex >= cardData.length - cardsPerPage
              ? "opacity-50"
              : "hover:bg-yellow-200 hover:text-black"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Blog;
