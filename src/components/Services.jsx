import React from "react";
import hand from "../assets/hand.jpg";
import head from "../assets/head.jpg";
import mask from "../assets/mask.jpg";

const Services = () => {
  return (
    <div name="services" className=" bg-[rgb(171,175,124)] w-ful md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <div className="pb-8">
          <h1 className=" text-yellow-400 text-4xl font-bold inline border-b-4">
            Our Services
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={hand}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-green-900">
                Body treatments
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={head}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-green-900">
                Hair & Scalp treatments
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={mask}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-green-900">
                Facial treatments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
