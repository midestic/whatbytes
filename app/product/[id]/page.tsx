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

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1280px] mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-md mx-auto"
      />
      <div>
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-blue-700 font-semibold mb-2">
          ${product.price}
        </p>
        <p className="mb-4">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          Category: {product.category}
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
