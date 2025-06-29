import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

type SearchProps = {
  search?: string;
  setSearch?: (value: string) => void;
};

export default function Header({ search, setSearch }: SearchProps) {
  const { cart } = useCart();

  return (
    <>
      <div className="fixed max-w-[1280px] w-[100%] z-100">
        <div className="w-[100%] bg-[#0758a8] flex justify-between items-center p-[20px] max-md:p-[10px]">
          <div className="w-[20%] max-md:w-[30%]">
            <Link href={"/"}>
              <img
                className="w-[100px] h-[100px] max-md:w-[100%] max-md:h-[100%]"
                src="/images/logobg.png"
                alt=""
              />
            </Link>
          </div>

          <div className="w-[60%] flex justify-between items-center">
            <div className="w-[60%] border border-white outline-0 rounded-[10px] max-md:hidden">
              <input
                onChange={(e) => setSearch && setSearch(e.target.value)}
                type="text"
                className="p-[10px] rounded-[10px] w-[100%] text-white font-[500] text-[16px]"
                placeholder="search for products"
              />
            </div>

            <div className="w-[20%] border bg-[#002b5b] rounded-[10px] text-white p-[10px] flex justify-around items-center max-md:w-[70%]">
              <Link
                href={"/cart"}
                className="flex justify-around items-center w-[100%]"
              >
                <FaCartShopping />
                <p className="font-bold">Cart</p>
                {cart.length > 0 && (
                  <span className=" -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs font-bold">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
