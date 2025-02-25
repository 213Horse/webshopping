import React from "react";
import { Layout, Menu } from "antd";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css"; 

const { Header } = Layout;

const CustomerHeader = () => {
  return (
    <Header className="custom-header border-b-0">

      <div className="logo">BOM SISTER®</div>

      {/* Navigation Menu */}
      <Menu mode="horizontal" className="nav-menu">
        <Menu.Item key="1">Áo ngực</Menu.Item>
        <Menu.Item key="2">Quần lót nữ</Menu.Item>
        <Menu.Item key="3">Bralette</Menu.Item>
        <Menu.Item key="4">Phụ kiện nội y</Menu.Item>
        <Menu.Item key="5">Chuyên dụng</Menu.Item>
        <Menu.Item key="6">Blog</Menu.Item>
      </Menu>

      {/* Icons (Search, User, Cart) */}
      <div className="icons-container">
        <SearchOutlined className="icon" />
        <UserOutlined className="icon" />
        <div className="cart-icon-wrapper">
          <ShoppingCartOutlined className="icon" />
        </div>
      </div>
    </Header>
  );
};

export default CustomerHeader;
