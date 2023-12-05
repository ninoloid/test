import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Services",
    },
    {
      id: 4,
      link: "Testimonials",
    },
    {
      id: 5,
      link: "Contact Us",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white fixed bg-[rgb(171,175,124)]">
      <div>
        <img src={Logo} alt="" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-black hover:scale-105 duration-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[rgb(251,236,232)] text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
