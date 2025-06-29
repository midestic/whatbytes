import React from "react";

type ItemsProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export default function ProductsCard({
  id,
  title,
  image,
  price,
  description,
  category,
}: ItemsProps) {
  return (
    <div className="w-[100%] space-y-[20px] h-auto">
      <div className="w-[100%] h-[300px]">
        <img className="w-[100%] h-[100%]" src={image} alt="" />
      </div>

      <div>
        <p className="text-start font-bold ">{title}</p>{" "}
        <p className="text-start font-extrabold ">${price}</p>{" "}
      </div>

      <button className="bg-[#0758a8] w-[100%] text-white font-bold p-[10px] rounded-[10px]">
        Add to Cart
      </button>
    </div>
  );
}
