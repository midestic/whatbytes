import { Suspense } from "react";
import ProductView from "./components/ProductView";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">Loading...</div>
            <div className="text-gray-500 mt-2">
              Please wait while we load the products
            </div>
          </div>
        </div>
      }
    >
      <ProductView />
    </Suspense>
  );
}
