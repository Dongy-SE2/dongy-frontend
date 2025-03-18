import { searchProduct } from "./searchProduct";

interface SearchProductCardProps {
    searchProduct: searchProduct;
}

function SearchProductCard(props: SearchProductCardProps) {
    const {searchProduct} = props;

    return(
        <div className="card">
            <section className="section dark">
                <h5 className="strong">
                    <strong>{searchProduct.product_name}</strong>
                </h5>
                <p>{searchProduct.price}</p>
            </section>
        </div>
    );
}

export default SearchProductCard