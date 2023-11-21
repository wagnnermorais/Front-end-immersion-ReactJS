import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Resultados da pesquisa:</h1>
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

export default Search;
