"use client"
import { searchProduct } from "../api/searchProduct/searchProduct";
import { useState, useEffect } from "react";
import { searchProductAPI } from "../api/searchProduct/searchProductAPI";
import { useParams } from "next/navigation";
import SearchProductList from "../../components/SearchProductList";


function LandingPage() {
  
    const [loading, setLoading] = useState(false);
    const [searchProducts, setSearchProducts] = useState<searchProduct[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [response, setResponse] = useState(null);

    useEffect(() => {
        async function loadSearchProducts() {
            setLoading(true)
            try{
              const data = await searchProductAPI.get(searchText)
              console.log(`this is your data: ${data}`)
              //setResponse(data);
              setSearchProducts(data)
            } catch(e) {
                if(e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadSearchProducts();
    }, [])

    const handleSearch = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        try{
          const data = await searchProductAPI.get(searchText)
          //setResponse(data);
          setSearchProducts(data)
        } catch(error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false)
        }
    }

  return (
    <>

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
     
    <form onSubmit={handleSearch}>

    <label> search </label>
    <input type="text"
    placeholder="ค้นหาสินค้า"
    onChange={(e) => setSearchText(e.target.value)}></input>
    <button>submit</button>

    </form>
     

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