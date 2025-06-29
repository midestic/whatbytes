"use client";

import Link from "next/link";
import Header from "./components/Header";
import ProductsCard from "./components/ProductsCard";
import SidebarFilter from "./components/SidebarFilter";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("products fetching failed");
      const data = await res.json();
      setProducts(data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
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
    <div className="w-[100%] max-md:overflow-x-hidden">
      <Header search={search} setSearch={setSearch} />

      <main className="flex bg-gray-2 bg-[#f5f7fd]">
        <div className={`max-md:hidden w-[30%]`}>
          <SidebarFilter />
        </div>

        <div className="w-[70%]  p-[20px] mt-[150px] max-md:w-[100%]">
          <h1 className="font-[900] text-[30px]">Product Listing</h1>

          {loading ? (
            <div className="text-center font-bold text-blue-500 text-lg mt-10">
              Loading products......
            </div>
          ) : error ? (
            <div className="text-center text-red-500 text-lg mt-10">
              {error}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg mt-10">
              No products found.
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5  mt-[40px] max-md:grid-cols-2">
              {filteredItems.map((items) => (
                <Link href={`/product/${items.id}`} key={items.id}>
                  <div
                    className=" h-auto bg-white rounded-[10px]
            flex flex-col justify-center items-center gap-y-[20px] p-[20px] shadow shadow-gray-600 "
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
    </div>
  );
}
