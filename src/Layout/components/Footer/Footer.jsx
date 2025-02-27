import React from "react";
import { Row, Col } from "antd";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Row gutter={40}>
          {/* Left Column - Company Info */}
          <Col xs={24} sm={12} md={6} className="footer-section">
            <h2 className="footer-logo">BOM SISTER®</h2>
            <p>📍 Địa chỉ: Hệ thống cửa hàng</p>
            <p>🕒 Từ 8:30 - 9:30 (Thứ 2 - Thứ 7)</p>
            <p>📞 Số điện thoại: 0906 89 77 39</p>
            <p>✉ Email: hotro@bomsister.vn</p>
            <p>© Bản quyền thuộc về BOM Sister</p>
          </Col>

          {/* Middle Column - Customer Support */}
          <Col xs={24} sm={12} md={6} className="footer-section">
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
            <ul>
              <li>Giới thiệu</li>
              <li>Cửa hàng tại TP HCM</li>
              <li>Cửa hàng tại Hà Nội</li>
              <li>Tin tức sự kiện</li>
              <li>Tuyển dụng</li>
              <li>Liên hệ hợp tác</li>
            </ul>
          </Col>

          {/* Middle Column - Policies */}
          <Col xs={24} sm={12} md={6} className="footer-section">
            <h3>CHÍNH SÁCH</h3>
            <ul>
              <li>Chính sách đổi trả và bảo hành</li>
              <li>Chính sách bảo mật</li>
              <li>Quy trình giao hàng</li>
              <li>Hướng dẫn chọn size</li>
              <li>Điều khoản dịch vụ</li>
              <li>Điều khoản & điều kiện</li>
            </ul>
          </Col>

          {/* Right Column - Social Media */}
          <Col xs={24} sm={12} md={6} className="footer-section">
            <h3>ĐĂNG KÝ NHẬN TIN</h3>
            <div className="social-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111748.png" alt="Zalo" />
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png" alt="YouTube" />
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046125.png" alt="TikTok" />
            </div>
          </Col>
        </Row>

        {/* Bottom - Payment Methods */}
        <div className="footer-bottom">
          <div className="footer-certifications">
            <img src="https://theme.hstatic.net/200000726923/1001091202/14/logo_bocongthuong.png?v=655" alt="Bộ Công Thương" />
            <img src="https://theme.hstatic.net/200000726923/1001091202/14/dmca.png?v=655" alt="DMCA Protected" />
            <img src="https://theme.hstatic.net/200000726923/1001091202/14/logo_ncsc.png?v=655" alt="NCSC" />
          </div>

          <div className="footer-payment">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/MasterCard_Logo.svg" alt="MasterCard" />
            <img src="https://theme.hstatic.net/200000726923/1001091202/14/momo_logo.png?v=655" alt="MoMo" />
            <img src="https://theme.hstatic.net/200000726923/1001091202/14/logo_zalopay.png?v=655" alt="ZaloPay" />
            <img src="https://theme.hstatic.net/200000726923/1001091202/14/logo_cod.png?v=655" alt="COD" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
