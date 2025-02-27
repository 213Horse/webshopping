import React from "react";
import { Card, Col, Rate, Row } from "antd";
import "./CustomerReview.css";

const reviews = [
  {
    id: 1,
    name: "Liên Hoa",
    rating: 5,
    review:
      "Đúng loại mình thích luôn, mút mỏng mặc thoải mái không bị nóng, chất liệu mềm mại, có gọng nên vẫn nâng ngực, đã giặt và không bị xù nhé, shop chăm sóc khách hàng tốt, chuẩn bị hàng nhanh",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Bích Chi",
    rating: 5,
    review:
      "Giao hàng nhanh, đặt hôm kia nay giao được rồi. Shop có che tên sp giúp, chu đáo quá, nhân viên nói chuyện dễ thương nữa. Mình cũng đặt hàng bên này cũng 4 lần rồi. Mình hơi ốm có 38kg sợ ko vừa but mà về thử vừa v. Vải mềm mịn nữa. Sẽ ủng hộ tiếp",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Thu Hằng",
    rating: 4.5,
    review:
      "Áo tập vừa với mình, 1.68m, 56kg vừa size XL, co giãn thoải mái, mặc đẹp, sẽ mua thêm. Bra mặc thoải mái dễ chịu, thấy có thua j uniqlo đâu mà giá rẻ hơn nhiều",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const CustomerReview = () => {
  return (
    <div className="review-container">
      <h2 className="review-title">Khách hàng đã nói gì</h2>
      <div className="review-grid">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="review-card"
            bodyStyle={{ padding: 0 }}
          >
            <div className="review-content">
              <div className="review-text">
              <Row justify={"space-between"}>
                <Col>
                  <h3 className="text-[20px]">{review.name}</h3>
                  <Rate disabled allowHalf defaultValue={review.rating} />
                </Col>
                <Col>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-img"
                  />
                </Col>
                </Row>
                <p>{review.review}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
