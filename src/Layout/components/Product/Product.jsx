import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Product.css";

// const product = {
//   image:
//     "https://product.hstatic.net/200000726923/product/d005_2x-8__small__50962df1d36449bf91f50aa0aae5a4d2_large.png",
//   category: "KHÁC",
//   title:
//     "BOM Sister x Ngọc Trinh - Áo dán cài trước diện trang phục hở cổ nhiều tone màu BOM Sister D005",
//   price: "158,000₫",
//   colors: [
//     { name: "Màu da dạng xoài", color: "#F5D0A4" },
//     { name: "Màu da trung tính", color: "#E8C8B2" },
//     { name: "Màu sáng", color: "#F9F5F3" },
//   ],
// };

const Product = ({product}) => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <Card className="product-card border-0" bodyStyle={{padding:"0px"}}>
      <img src={product.image} alt="Product" className="product-image" />
      <div className="product-info">
        <p className="category">{product.category}</p>
        <p className="title">{product.title}</p>
        <p className="price">{product.price}</p>
        <div className="color-container">
          {product.colors.map((color, index) => (
            <Tooltip title={color.name} key={index}>
              <div
                className={`color-circle ${
                  selectedColor === index ? "selected" : ""
                }`}
                style={{ backgroundColor: color.color }}
                onClick={() => setSelectedColor(index)}
              ></div>
            </Tooltip>
          ))}
          <span className="extra-colors">
            <PlusOutlined /> 2
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Product;
