import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  // Resgatando dados
  const [products, setProducts] = useState([]);

  // Custom Hook
  const { data: items, httpConfig } = useFetch(url);

  // Método substituido para realizar o GET com custom hook
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   }

  //   getData();
  // }, []);

  // Enviando dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");

    // Método substituido para realizar o POST com custom hook
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // console.log(product);

    // const addedProduct = await response.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  // Carregamento Dinâmico

  return (
    <>
      <h1>HTTP em React</h1>

      {/* Resgatando dados */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
      </ul>
      {/* Enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
}

export default App;
