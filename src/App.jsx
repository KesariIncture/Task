import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderComp from "./HeaderComp";
import MainContent from "./MainContent";

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <HeaderComp />
        <Layout>
          <MainContent />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
