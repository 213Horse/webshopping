import { Layout } from "antd";
import React from "react";
import CustomerHeader from "./components/Header/Header";
const { Content } = Layout;

const CustomerLayout = ({ children }) => {
  return (
    <Layout>
    <CustomerHeader>
    </CustomerHeader>
      <Content
        style={{
          background: "white",
        }}
      >
        {children && children}
      </Content>
    </Layout>
  );
};

export default CustomerLayout;
