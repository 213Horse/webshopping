import React from "react";
import "./Bralette.css";
import Product from "../../../../Layout/components/Product/Product";

const products = [
  {
    id: 1,
    image: "https://product.hstatic.net/200000726923/product/d005_2x-8__small__50962df1d36449bf91f50aa0aae5a4d2_large.png",
    category: "KHÁC",
    title: "BOM Sister x Ngọc Trinh - Áo dán cài trước diện trang phục hở cổ nhiều tone màu BOM Sister D005",
    price: "158,000₫",
    colors: ["#F5D0A4", "#E8C8B2", "#F9F5F3"],
  },
  {
    id: 2,
    image: "https://product.hstatic.net/200000726923/product/d005_2x-8__small__50962df1d36449bf91f50aa0aae5a4d2_large.png",
    category: "KHÁC",
    title: "BOM Sister x Ngọc Trinh - Bộ đồ lót nữ phong cách thể thao cá tính BOM Sister MB2709",
    price: "498,000₫",
    colors: ["#fff", "#000"],
  },
  {
    id: 3,
    image: "https://product.hstatic.net/200000726923/product/d005_2x-8__small__50962df1d36449bf91f50aa0aae5a4d2_large.png",
    category: "KHÁC",
    title: "BOM Sister x Ngọc Trinh - Bộ đồ ngủ, đồ mặc nhà nữ áo có tay quần đùi họa tiết đơn giản dễ thương BOM Sister",
    price: "498,000₫",
    colors: ["#FFC0CB", "#ADD8E6"],
  },
  {
    id: 4,
    image: "https://product.hstatic.net/200000726923/product/d005_2x-8__small__50962df1d36449bf91f50aa0aae5a4d2_large.png",
    category: "KHÁC",
    title: "BOM Sister x Ngọc Trinh - Quần su đúc, đáy hai lớp thông hơi, không viền màu trơn ngẫu nhiên MP2506",
    price: "108,000₫",
    colors: ["#000", "#A52A2A", "#E8C8B2", "#F5F5DC"],
  },
  {
    id: 5,
    image: "https://product.hstatic.net/200000726923/product/d005_2x-8__small__50962df1d36449bf91f50aa0aae5a4d2_large.png",
    category: "KHÁC",
    title: "BOM Sister x Ngọc Trinh - Quần su đúc, đáy hai lớp thông hơi, không viền màu trơn ngẫu nhiên MP2506",
    price: "108,000₫",
    colors: ["#000", "#A52A2A", "#E8C8B2", "#F5F5DC"],
  },
];

const Bralette = () => {
  return (
    <div className="bralette-container">
      <div className="bralette-title">
        <p className="text-[25px]">Bralette</p>
        <p className="text-[36px]">Đang bán chạy</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Bralette;
