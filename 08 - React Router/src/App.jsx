import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
// Search Params
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <nav>
        <Navbar />
        <SearchForm />
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
