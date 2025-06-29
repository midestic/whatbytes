"use client";

import Header from "@/app/components/Header";
import { useCart } from "@/app/context/CartContext";
import { notFound } from "next/navigation";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  const product: Product = await res.json();

  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <div className="">
        <div className=" border flex justify-between items-start max-w-[1280px] w-[90%] gap-x-[20px] mx-auto translate-y-[120px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md mx-auto"
          />
          <div className="w-[60%] border space-y-[20px]">
            <h1 className="text-[24px] font-bold ">{product.title}</h1>
            <p className="text-xl text-blue-700 font-semibold mb-2">
              ${product.price}
            </p>
            <p className="text-[16px]">{product.description}</p>
            <p className="text-[14px] text-gray-500 mb-4">
              Category: {product.category}
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-[10px] font-bold hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
