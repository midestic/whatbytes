import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex">
        <div className="w-[30%] border"></div>
        <div className="w-[70%] border"></div>
      </main>
    </div>
  );
}
