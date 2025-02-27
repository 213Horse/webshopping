import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css"; 

const { Header } = Layout;

// Define menu items with submenus
const menuItems = [
  {
    key: "1",
    title: "Áo ngực",
    subMenu: [
      "Áo ngực không gọng",
      "Áo ngực có gọng",
      "Áo ngực nâng",
      "Áo ngực cúp ngang",
      "Áo ngực su",
      "Áo ngực ren",
    ],
  },
  {
    key: "2",
    title: "Quần lót nữ",
    subMenu: [
      "Quần lót nữ su đúc",
      "Quần lót nữ cotton",
      "Quần không đường may",
      "Quần không viền",
      "Quần lọt khe",
      "Quần lót nữ gen",
      "Quần lót nữ thun lạnh",
    ],
  },
  {
    key: "3",
    title: "Bralette",
    subMenu: [
      "Bralette cơ bản",
      "Bralette ống",
      "Bralette croptop",
      "Bralette thể thao",
      "Bralette phối ren",
      "Bralette Cotton",
    ],
  },
  {
    key: "4",
    title: "Phụ kiện nội y",
    subMenu: [
      "Miếng dán ngực",
      "Dây áo ngực",
      "Miếng nối áo ngực",
      "Tất vớ nữ",
      "Khẩu trang",
    ],
  },
  { key: "5", title: "Chuyên dụng", subMenu: [] },
  { key: "6", title: "Blog", subMenu: [] },
];

// Dropdown menu generator
const generateMenu = (items) => (
  <Menu className="dropdown-menu">
    {items.map((item, index) => (
      <Menu.Item key={index}>{item}</Menu.Item>
    ))}
  </Menu>
);

const CustomerHeader = () => {
  return (
    <Header className="custom-header">
      <div className="logo">BOM SISTER®</div>

      {/* Navigation Menu */}
      <Menu mode="horizontal" className="nav-menu">
        {menuItems.map((menuItem) =>
          menuItem.subMenu.length > 0 ? (
            <Menu.Item key={menuItem.key} className="nav-item">
              <Dropdown overlay={generateMenu(menuItem.subMenu)} trigger={["hover"]}>
                <span>{menuItem.title}</span>
              </Dropdown>
            </Menu.Item>
          ) : (
            <Menu.Item key={menuItem.key} className="nav-item">
              {menuItem.title}
            </Menu.Item>
          )
        )}
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
