import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/contact">Contatos</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
