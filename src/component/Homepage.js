import voucherData from "../assets/data/voucherData";
import VoucherItem from "./homepage/VoucherItemList";
import NewsList from "./homepage/NewsList";
import newsData from "../assets/data/newsData";
import "../style/homepage.scss";
import Slide from "./homepage/Slide";
const Homepage = () => {
  const hotVouchers = voucherData;
  // console.log(hotVouchers);
  return (
    <div className="homepage-container">
      <Slide listVoucher={hotVouchers} title="Slide" />
      <div className="vouchers">
        <div className="voucher-items">
          <VoucherItem
            className="hot-vouchers"
            listVoucher={hotVouchers}
            title="Hot Vouchers"
          />
          <VoucherItem
            className="list-vouchers-container"
            listVoucher={hotVouchers}
            title="Uu dai danh cho ban"
          />
        </div>
        <NewsList
          className="list-news"
          HotNews={newsData}
          title="Tin tuc moi"
        />
      </div>
    </div>
  );
};
export default Homepage;
