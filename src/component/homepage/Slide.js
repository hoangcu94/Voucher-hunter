import { useState } from "react";
import "../../style/slide.scss";
const Slide = (props) => {
  const { listVoucher } = props;
  const [count, setCount] = useState(0);
  const [voucher, setVoucher] = useState(listVoucher[0]);

  const prev = () => {
    if (count <= 0) {
      setCount(4);
      setVoucher(listVoucher[0]);
    } else {
      setCount(count - 1);
      setVoucher(listVoucher[count]);
    }
    console.log(count);
  };
  const next = () => {
    if (count >= 4) {
      setCount(0);

      setVoucher(listVoucher[4]);
    } else {
      setCount(count + 1);
      setVoucher(listVoucher[count]);
    }
    console.log(count);
  };

  return (
    <div className="slide-container">
      <button className="prev" onClick={prev}>
        Back
      </button>
      <div className="item-card">
        <img src={voucher.img} alt="" />
        <div className="item-title">{voucher.title}</div>
      </div>

      <button className="next" onClick={next}>
        Next
      </button>
    </div>
  );
};
export default Slide;
