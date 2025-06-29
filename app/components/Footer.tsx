import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaCopyright, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="w-[100%] bg-[#0758a8]">
      <div className="w-[100%] flex justify-between items-start text-white">
        <div className="w-[30%] border border-white space-y-[30px] p-[20px]">
          <div className="space-y-[10px]">
            <p className="font-bold text-[20px]">Filter</p>
            <p>All EEZRONK</p>
          </div>

          <p className="flex items-center gap-x-[5px]">
            <FaCopyright /> {year} American
          </p>
        </div>

        <div className="w-[30%] border border-white space-y-[30px] p-[20px]">
          <div className="space-y-[10px]">
            <p className="font-bold text-[20px]">About Us</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="w-[40%] border space-y-[30px]">
          <p className="font-bold text-[20px]">Follow Us</p>
          <div className="flex justify-start gap-x-[20px]">
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
