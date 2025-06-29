"use client";

import Header from "@/app/components/Header";
import { useCart } from "@/app/context/CartContext";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export default function ProductClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <div className="">
        <div
          className=" flex justify-between items-start max-w-[1280px] w-[90%] gap-x-[20px] mx-auto 
        translate-y-[180px] max-md:flex-col pb-[100px] max-md:w-[100%] max-md:px-[20px]"
        >
          <div className="w-[39%] h-[500px] border max-md:w-[100%]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[100%] max-w-md mx-auto"
            />
          </div>

          <div className="w-[60%] max-md:w-[100%] mx-auto max-md:mt-[50px]  space-y-[20px] ">
            <h1 className="text-[24px] font-bold max-md:text-center max-md:w-[100%]">
              {product.title}
            </h1>
            <p className="text-xl text-blue-700 font-semibold mb-2">
              ${product.price}
            </p>
            <p className="text-[16px]">{product.description}</p>
            <p className="text-[14px] text-gray-500 mb-4">
              Category: {product.category}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-[10px] font-bold hover:bg-blue-700 max-md:w-[100%]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
