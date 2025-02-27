import { Layout } from "antd";
import React from "react";
import CustomerHeader from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const { Content } = Layout;

const CustomerLayout = ({ children }) => {
  return (
    <Layout>
      <CustomerHeader></CustomerHeader>
      <Content
        style={{
          background: "white",
        }}
      >
        {children && children}
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default CustomerLayout;
