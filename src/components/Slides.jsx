import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import girls from "../assets/girls.jpg";
import jamu from "../assets/jamu.jpg";
import face from "../assets/face.jpg";
import coffee from "../assets/coffee.jpg";
import dupa from "../assets/dupa.jpg";

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: girls },
    { url: face },
    { url: coffee },
    { url: dupa },
    { url: jamu },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="max-w-[1400] h-[780px] w-full m-auto py-16 px-4 relative bg-[rgb(171,175,124)] flex flex-col items-center justify-center">
      <p className="text-4xl sm:text-6xl pb-4 font-bold text-yellow-400">
        Get to know us:
      </p>
      <div
        style={{
          backgroundImage: `url(${slides[currentSlide].url})`,
          backgroundSize: "50%", // Adjust the percentage to your preference
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        {/*left arrow*/}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer "
          onClick={handlePrevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        {/*right arrow*/}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer "
          onClick={handleNextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
