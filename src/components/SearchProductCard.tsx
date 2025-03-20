import { searchProduct } from "../app/api/searchProduct/searchProduct";

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
                <img src={searchProduct.product_image} alt="product_image"></img>
            </section>
        </div>
    );
}

export default SearchProductCard