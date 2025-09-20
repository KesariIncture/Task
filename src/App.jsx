
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderComp from "./HeaderComp";
import MainContent from "./MainContent";

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <HeaderComp />
        <Content
          style={{
            background: "white",
            padding: "24px",
            overflow: "auto",
          }}
        >
          <MainContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
