"use client"
import { searchProduct } from "../api/searchProduct/searchProduct";
import { useState, useEffect } from "react";
import { searchProductAPI } from "../api/searchProduct/searchProductAPI";
import { useParams } from "next/navigation";
import SearchProductList from "../api/searchProduct/SearchProductList";


function LandingPage() {
    const [loading, setLoading] = useState(false);
    const [searchProducts, setSearchProducts] = useState<searchProduct[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadSearchProducts() {
            setLoading(true)
            try{
                const data = await searchProductAPI.get(currentPage);

                if(currentPage === 1){
                    setSearchProducts(data);
                } else {
                    setSearchProducts((searchProducts) =>  [...searchProducts, ...data]);
                }
            } catch(e) {
                if(e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadSearchProducts();
    }, [currentPage])

  return (
    <>
    <p>search</p>

    {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
       </div>
     )}

    <SearchProductList searchProducts={searchProducts} />

    {!loading && !error && (
        true
    )}

    {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>

    
  );
}


export default LandingPage;