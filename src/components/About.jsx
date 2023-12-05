import React from "react";
import aloe from "../assets/aloe.jpg";

const About = () => {
  return (
    <div name="About" className="h-screen w-full bg-[rgb(171,175,124)]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="md:w-1/2  flex flex-col justify-center h-full">
          <img
            src={aloe}
            alt="heroImage"
            className="mx-auto w-2/3 md:w-full py-10"
          />
        </div>

        <div className="md:w-1/2 bg-[rgb(171,175,124)]">
          <div className=" max-w-md px-6 flex flex-col justify-centerbg-[rgb(171,175,124)] ">
            <p className="text-4xl text-yellow-400 font-bold">About us</p>

            <h1 className="text-2xl sm:text-2xl font-bold">
              Organic, Natural, Beautiful
            </h1>

            <p className="text-green-900">
              Nestled in the serene landscapes of Bali, Sundari Beauty and Spa
              was founded with a vision to embrace and enhance the natural
              beauty that surrounds us. Established in 1994, our spa takes
              inspiration from the rich cultural heritage and the lush, tropical
              environment of Bali.
            </p>
            <br />

            <p className=" text-green-900">
              Sundari, which translates to "beautiful" in Sanskrit, embodies our
              commitment to beauty in its most authentic form. Our journey began
              with a deep appreciation for the traditional beauty rituals and
              natural ingredients that have been cherished for centuries in
              Bali.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
