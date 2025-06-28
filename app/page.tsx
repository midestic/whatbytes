"use client";

import Header from "./components/Header";
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
    <div>
      <Header />

      <main className="flex bg-[fafbff]">
        <div className="w-[30%] border p-[20px]">
          {" "}
          <SidebarFilter />
        </div>
        <div className="w-[70%] border p-[20px]">
          <h1 className="font-[900] text-[30px]">Product Listing</h1>

          <div className="flex justify-between items-start">
            {products &&
              products.map((items) => (
                <div key={items.id}>
                  <p>{items.title}</p>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
