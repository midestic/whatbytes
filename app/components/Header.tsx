import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="fixed max-w-[1280px] w-[100%] ">
      <div className="w-[100%] bg-[#0758a8] flex justify-between items-center p-[20px] ">
        <div className="w-[20%] border">
          <FaShoppingCart className="text-white " />
        </div>

        <div className="w-[60%] flex justify-between items-center">
          <div className="w-[60%] border border-white outline-0 rounded-[10px] ">
            <input
              type="text"
              className="p-[10px] rounded-[10px] w-[100%] text-white font-[500] text-[16px]"
              placeholder="search for products"
            />
          </div>
          <div className="w-[20%] border bg-[#002b5b] rounded-[10px] text-white p-[10px] flex justify-around items-center">
            <FaCartShopping />

            <p className="font-bold">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
