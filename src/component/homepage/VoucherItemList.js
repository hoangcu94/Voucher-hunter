import "../../style/voucherIten.scss";
const VoucherItemList = (props) => {
  const { listVoucher, title } = props;
  return (
    <div className="hotVoucher-container">
      <h2 className="title">{title}</h2>
      <div className="voucher-list-card">
        {listVoucher.map((item, index) => {
          return (
            <div key={index} className="item-card">
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoucherItemList;
