import Image from "next/image";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <ProductCard key={1}
          image={"product.image"}
          title={"product.title"}
          price={100} />
    
    </div>
  );
}
