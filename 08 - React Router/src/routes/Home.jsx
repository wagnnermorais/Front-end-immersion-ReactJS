// Carregando Dados
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

// Rota Dinâmica
import { Link } from "react-router-dom";

const Home = () => {
  const { data: items } = useFetch(url);
  return (
    <div>
      <h1>Home</h1>
      {/* Carregando dados */}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
