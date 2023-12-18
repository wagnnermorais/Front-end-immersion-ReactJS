import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link to={"/"}>
        <h2>Blog</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/create"}>
          <li className="create-button">Criar</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
