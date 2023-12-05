import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="max-w-full mx-auto py-16 px-4 grid lg:grid-col-3 gap-8 text-green-900 bg-[rgb(137,141,88)]">
      <div>
        <h1 className="w-full text-3xl font-bold">Open Daily</h1>
        <p className="py-2">Monday - Friday 8am - 5pm</p>
        <p className="mb-8">Saturday - Sunday 9am - 6pm</p>
        <div className="flex justify-between md:w-[75%] py-2">
          <FaInstagram size={30} />
          <FaTiktok size={30} />
          <FaWhatsapp size={30} />
          <FaFacebook size={30} />
          <BiLogoGmail size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <p>
            Jalan Lebak Sari No.3, Petitenget, Badung, Bali, 80361, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
