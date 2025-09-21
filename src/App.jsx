import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderComp from "./HeaderComp";
import MainContent from "./MainContent";
import NotificationPanel from "./NotificationPanel";

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <HeaderComp />
        <Layout style={{ position: "relative" }}>
          <Content
          // style={{
          //   marginRight: "325px",
          //   minHeight: "calc(100vh - 64px)",
          // }}
          >
            <MainContent />
          </Content>

          {/* <Layout
            style={{
              position: "absolute",
              right: 0,
              width: "325px",
              borderLeft: "1px solid #f0f0f0",
              backgroundColor: "white",
              overflow: "auto",
            }}
          >
            <NotificationPanel />
          </Layout> */}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
