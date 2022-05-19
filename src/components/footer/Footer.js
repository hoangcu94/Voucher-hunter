import { Link } from "react-router-dom";
import "../../style/footer.scss";
const Footer = () => {
  return (
    <form>
      <div>
        <h5 className="Useful-Link">Liên kết nhanh</h5>
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
      <div>
        <h5>Đối tác liên kết</h5>
        <ul>
          <li>
            <Link to="/shopee">Shopee</Link>
          </li>
          <li>
            <Link to="/lazada">Lazada</Link>
          </li>
          <li>
            <Link to="/toyota">Toyota</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Địa chỉ công ty</h5>
        <div>Mindx thành công</div>
      </div>
    </form>
  );
};

export default Footer;
