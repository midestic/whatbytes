import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaCopyright, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-[100%] bg-[#0758a8] max-md:py-[20px]">
      <div className="w-[100%] flex justify-between items-start text-white max-md:flex-col">
        <div className="w-[30%]  space-y-[30px] p-[20px] max-md:w-[100%]  max-md:flex max-md:flex-col max-md:items-center">
          <div className="space-y-[10px]">
            <p className="font-bold text-[20px]">Filter</p>
            <p>All EEZRONK</p>
          </div>

          <p className="flex items-center gap-x-[5px]">
            <FaCopyright /> {year} American
          </p>
        </div>

        <div className="w-[30%]  space-y-[30px] p-[20px] max-md:w-[100%]">
          <div className="space-y-[10px] max-md:flex max-md:flex-col max-md:items-center">
            <p className="font-bold text-[20px]">About Us</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="w-[40%]  space-y-[30px] max-md:w-[100%]  p-[20px]">
          <p className="font-bold text-[20px] max-md:text-center">Follow Us</p>
          <div className="flex justify-start gap-x-[20px] max-md:flex  max-md:items-center max-md:gap-x-[10px]">
            <span>
              {" "}
              <FaFacebook className="w-[80px] h-[30px]" />{" "}
            </span>
            <span>
              <BsTwitterX className="w-[80px] h-[30px]" />{" "}
            </span>
            <span>
              <BsInstagram className="w-[80px] h-[30px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
