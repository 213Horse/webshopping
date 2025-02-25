import React from "react";
import "./Policies.css"; // Import normal CSS

const policies = [
  {
    icon: "https://theme.hstatic.net/200000726923/1001091202/14/policies_icon_1.png?v=655",
    title: "Miễn phí vận chuyển",
    description: "Nhận hàng trong vòng 3 ngày",
  },
  {
    icon: "https://theme.hstatic.net/200000726923/1001091202/14/policies_icon_2.png?v=655",
    title: "Quà tặng hấp dẫn",
    description: "Nhiều ưu đãi khuyến mãi hot",
  },
  {
    icon: "https://theme.hstatic.net/200000726923/1001091202/14/policies_icon_3.png?v=655",
    title: "Bảo đảm chất lượng",
    description: "Sản phẩm đã được kiểm định",
  },
  {
    icon: "https://theme.hstatic.net/200000726923/1001091202/14/policies_icon_4.png?v=655",
    title: "Hotline: 0906897739",
    description: "Dịch vụ hỗ trợ bạn 24/7",
  },
];

const Policies = () => {
  return (
    <div className="policy-section">
      {policies.map((policy, index) => (
        <div className="policy-item" key={index}>
          <img src={policy.icon} alt={policy.title} className="policy-icon" />
          <div className="policy-text">
            <h4>{policy.title}</h4>
            <p>{policy.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policies;
