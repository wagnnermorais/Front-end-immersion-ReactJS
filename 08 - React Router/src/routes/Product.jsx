import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <p>ID do produto: {id}</p>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      {/* Nested Route */}
      <Link to={`/products/${product.id}/info`}>Mais informações</Link>
    </div>
  );
};

export default Product;
