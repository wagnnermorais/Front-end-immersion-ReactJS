import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      {/* NavLink é mais recomendado para links em navegação do que o componente Link */}
      <div>
        {/* <Link to="/">Home</Link> */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </div>
      <div>
        {/* <Link to="/contact">Contatos</Link> */}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contatos
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
