"use client";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto p-8 translate-y-[150px]">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, idKey) => (
              <li
                key={idKey}
                className="border p-4 rounded flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
