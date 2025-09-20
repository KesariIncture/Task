import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderComp from "./HeaderComp";
import MainContent from "./MainContent";

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <HeaderComp />

        <MainContent />
      </Layout>
    </Layout>
  );
};

export default App;
