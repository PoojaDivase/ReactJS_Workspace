import { useParams } from "react-router-dom";

const ProductDetail = () => {

    //react router custom hook
    const params = useParams();
    console.log(params.productId);

    return (
    <section>
        <h1>Procuct details</h1>
        <p>{params.productId}</p>
    </section>
    );
}


export default ProductDetail;