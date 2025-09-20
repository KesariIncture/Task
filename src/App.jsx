import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import HeaderComp from './HeaderComp';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderComp />
        <Content style={{
          background: 'white',
          padding: '24px',
          overflow: 'auto'
        }}>
          {/* Your main content will go here */}
          <div style={{
            background: 'white',
            minHeight: '100%',
            padding: '24px'
          }}>
            Main content area
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;