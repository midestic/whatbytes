"use client";
import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import PriceSlider from "../ui/PriceSlider";

export default function SidebarFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "All";
  const currentPrice = searchParams.get("price") || "0-1000";
  const [priceRange, setPriceRange] = useState<[number, number]>(
    currentPrice.split("-").map(Number) as [number, number]
  );

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePriceSliderChange = (range: [number, number]) => {
    setPriceRange(range);
    const params = new URLSearchParams(searchParams.toString());
    params.set("price", `${range[0]}-${range[1]}`);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-[100%] flex flex-col gap-y-[20px] mt-[150px]">
      <div className="bg-[#0758a8] text-white  space-y-[20px] p-[20px] rounded-[20px]">
        <h1 className="font-[700] text-[14px]">Filters</h1>
        <div className="flex flex-col gap-y-[10px]">
          <h1 className="font-[500] text-[12px]">Category</h1>
          <span className="space-x-[10px] ">
            <input
              type="radio"
              name="category"
              id="All"
              checked={currentCategory === "All"}
              onChange={() => handleCategoryChange("All")}
            />
            <label htmlFor="All">All</label>
          </span>
          <span className="space-x-[10px] ">
            <input
              type="radio"
              name="category"
              id="electronics"
              checked={currentCategory === "electronics"}
              onChange={() => handleCategoryChange("electronics")}
            />
            <label htmlFor="electronics">Electronics</label>
          </span>
          <span className="space-x-[10px] ">
            <input
              type="radio"
              name="category"
              id="clothing"
              checked={currentCategory === "clothing"}
              onChange={() => handleCategoryChange("clothing")}
            />
            <label htmlFor="clothing">Clothing</label>
          </span>
          <span className="space-x-[10px] ">
            <input
              type="radio"
              name="category"
              id="home"
              checked={currentCategory === "home"}
              onChange={() => handleCategoryChange("home")}
            />
            <label htmlFor="home">Home</label>
          </span>
          <PriceSlider range={priceRange} setRange={handlePriceSliderChange} />
        </div>
      </div>

      <div className="bg-white text-black  space-y-[20px] p-[20px] rounded-[20px]">
        <div className="flex flex-col gap-y-[10px]">
          <h1 className="font-[700] text-[12px]">Cacyroy</h1>
          <span className="space-x-[10px] ">
            <input type="radio" name="" id="All" />
            <label htmlFor="All">All</label>
          </span>
          <span className="space-x-[10px] ">
            <input type="radio" name="" id="electronics" />
            <label htmlFor="electronics">Electronics</label>
          </span>
          <span className="space-x-[10px] ">
            <input type="radio" name="" id="clothing" />
            <label htmlFor="clothing">Clothing</label>
          </span>
          <span className="space-x-[10px] ">
            <input type="radio" name="" id="home" />
            <label htmlFor="home">Home</label>
          </span>
          <div className="w-[100%] space-y-[14px]">
            <h1 className="font-[700] text-[12px]">Price</h1>
            <input
              placeholder="5000"
              className="w-[100%] border rounded-[10px] p-[10px] "
              type="number"
              min={0}
              max={5000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
