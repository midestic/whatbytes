"use client";

import Link from "next/link";
import Header from "./components/Header";
import ProductsCard from "./components/ProductsCard";
import SidebarFilter from "./components/SidebarFilter";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "./components/Footer";

type ProductTypes = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}[];

export default function Home() {
  const [products, setProducts] = useState<ProductTypes>([]);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const category = searchParams.get("category");
  const price = searchParams.get("price");
  let minPrice = 0,
    maxPrice = Infinity;
  if (price) {
    const [min, max] = price.split("-").map(Number);
    minPrice = min;
    maxPrice = max;
  }

  const filteredItems = products.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category ? item.category === category : true;
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="w-[100%] ">
      <Header search={search} setSearch={setSearch} />

      <main className="flex bg-gray-2 bg-[#f5f7fd]">
        <div className="w-[30%] border p-[20px] ">
          <SidebarFilter />
        </div>

        <div className="w-[70%] border p-[20px] mt-[120px] ">
          <h1 className="font-[900] text-[30px]">Product Listing</h1>

          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg mt-10">
              No products found.
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5 border border-amber-400 mt-[40px] ">
              {filteredItems.map((items) => (
                <Link href={`/product/${items.id}`} key={items.id}>
                  <div
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
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
