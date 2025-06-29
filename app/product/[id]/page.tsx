import ProductClient from "./ProductClient";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetail({
  params,
}: ProductDetailPageProps) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Product not found");
  }

  const product: Product = await res.json();

  return <ProductClient product={product} />;
}
