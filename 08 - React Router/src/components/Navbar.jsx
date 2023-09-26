import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/contact">Contatos</Link>
      </div>
    </div>
  );
};

export default Navbar;
