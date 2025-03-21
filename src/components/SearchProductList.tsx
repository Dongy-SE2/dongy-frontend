import { searchProduct } from "../app/api/searchProduct/searchProduct"
import SearchProductCard from "./SearchProductCard";


interface searchProductListProps {
    searchProducts: searchProduct[];
}

function SearchProductList({searchProducts} : searchProductListProps){
    const items = searchProducts.map( searchProduct => (
        <div key={searchProduct.id} className="cols-sm">
            <SearchProductCard searchProduct={searchProduct}/>
        </div>
    ))

    return <div className="row">{items}</div>
}

export default SearchProductList