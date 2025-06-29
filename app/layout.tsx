import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Ecommerce Store",
  description: "Quality wears",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} max-w-[1280px] mx-auto flex flex-col gap-y-[50px] bg-[#f5f7fd] max-md:overflow-x-hidden`}
      >
        <div className="w-[100%]">
          <CartProvider>{children}</CartProvider>
        </div>
        <div className="w-[100%] mt-[100px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
