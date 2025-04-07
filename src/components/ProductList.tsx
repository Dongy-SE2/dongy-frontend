"use client"
import { Product } from "@/app/api/product/getProductList";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const [loading,setLoading] = useState(false)

  return (
    <>
    { !loading && <div className="px-16 pt-10 grid grid-cols-3 w-full">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} setParentLoading={setLoading}/>
      ))}
    </div>}

    {loading && <div className='mt-60 flex justify-center'>
                <Hourglass size="60" color="#047857"
                speed="1.75" bg-opacity="0.1"/>
            </div>}
    </>
  );
};

export default ProductList;
