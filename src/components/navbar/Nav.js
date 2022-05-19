import { Link } from "react-router-dom";

import "../../style/nav.scss";
const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Voucher Hunter</h1>
      </Link>
      <ul>
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
    </nav>
  );
};
export default Nav;
