import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
