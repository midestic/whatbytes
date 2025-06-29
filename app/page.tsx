"use client";

import Link from "next/link";
import Header from "./components/Header";
import ProductsCard from "./components/ProductsCard";
import SidebarFilter from "./components/SidebarFilter";
import { useEffect, useState } from "react";

type ProductTypes = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}[];

export default function Home() {
  const [products, setProducts] = useState<ProductTypes | undefined>(undefined);

  async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    console.log(products);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="w-[100%] ">
      <Header />

      <main className="flex bg-gray-2 h-[100vh]">
        <div className="w-[30%] border p-[20px] ">
          {" "}
          <SidebarFilter />
        </div>
        <div className="w-[70%] border p-[20px] mt-[120px] ">
          <h1 className="font-[900] text-[30px]">Product Listing</h1>

          <div className="grid grid-cols-3 gap-5 border border-amber-400 mt-[40px] ">
            {products &&
              products.map((items) => (
                <Link href={`/product/${items.id}`}>
                  <div
                    key={items.id}
                    className="border h-auto bg-white rounded-[10px]
                   flex flex-col justify-center items-center gap-y-[20px] p-[20px]"
                  >
                    <ProductsCard
                      id={items.id}
                      title={items.title}
                      image={items.image}
                      price={items.price}
                      description={items.description}
                      category={items.category}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
