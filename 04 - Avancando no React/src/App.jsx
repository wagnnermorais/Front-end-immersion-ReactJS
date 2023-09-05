import "./App.css";
import { useState } from "react";
// import night from "./assets/night.jpg";
import Data from "./components/Data";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import PropFunction from "./components/PropFunction";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

// Renderização de lista com componente (loop)
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {
  // Função por props
  function showMessage() {
    console.log("Evento do componente pai!");
  }

  // State Lift
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      {/* <img src="/img.jpg" alt="Imagem" /> */}

      {/* Imagem em assets
      <img src={night} alt="Outra imagem" /> */}

      {/* useEffect */}
      <Data />

      {/* Renderização de Listas */}
      <ListRender />

      {/* Renderização Condicional */}
      <ConditionalRender />

      {/* props */}
      <ShowUserName name="Wagner" />

      {/* Destructuring props */}
      <CarDetails brand="Ford" color="Branco" km={64.328} />

      {/* Reaproveitamento de componentes */}
      <CarDetails brand="VW" color="Vermelho" km={121.885} />
      <CarDetails brand="Honda" color="Cinza" km={64.328} />

      {/* Renderização de lista com componente (loop) */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {/* Fragments */}
      <Fragment />

      {/* Children prop */}
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas
          voluptate, odit hic amet ut.
        </p>
      </Container>

      {/* Função por props */}
      <PropFunction myFunction={showMessage} />

      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
