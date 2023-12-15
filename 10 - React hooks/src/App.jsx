import { Outlet, Link } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
