import { Link } from "react-router-dom";
import "../style/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="title">
        Vouchers Hunter
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
