import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderComp from "./HeaderComp";
import MainContent from "./MainContent";
import Default from "./Default";
import NotificationPanel from "./NotificationPanel";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
        <Sidebar />
        <Layout>
          <HeaderComp />
          <Layout style={{ position: "relative" }}>
            <Content>
              <Routes>
                <Route path="/" element={<MainContent />} />

                <Route path="/default" element={<Default />} />

                <Route
                  path="/ecommerce/dashboard"
                  element={
                    <div style={{ padding: 24 }}>eCommerce Dashboard</div>
                  }
                />
                <Route
                  path="/ecommerce/products"
                  element={<div style={{ padding: 24 }}>Products Page</div>}
                />
                <Route
                  path="/ecommerce/orders"
                  element={<div style={{ padding: 24 }}>Orders Page</div>}
                />

                <Route
                  path="/projects/overview"
                  element={<div style={{ padding: 24 }}>Projects Overview</div>}
                />
                <Route
                  path="/projects/list"
                  element={<div style={{ padding: 24 }}>Project List</div>}
                />

                <Route
                  path="/courses/dashboard"
                  element={<div style={{ padding: 24 }}>Courses Dashboard</div>}
                />
                <Route
                  path="/courses/list"
                  element={<div style={{ padding: 24 }}>Course List</div>}
                />

                <Route
                  path="/profile/overview"
                  element={<div style={{ padding: 24 }}>Profile Overview</div>}
                />
                <Route
                  path="/profile/projects"
                  element={<div style={{ padding: 24 }}>Profile Projects</div>}
                />
                <Route
                  path="/profile/campaigns"
                  element={<div style={{ padding: 24 }}>Profile Campaigns</div>}
                />
                <Route
                  path="/profile/documents"
                  element={<div style={{ padding: 24 }}>Profile Documents</div>}
                />
                <Route
                  path="/profile/followers"
                  element={<div style={{ padding: 24 }}>Profile Followers</div>}
                />

                <Route
                  path="/account/settings"
                  element={<div style={{ padding: 24 }}>Account Settings</div>}
                />
                <Route
                  path="/account/billing"
                  element={<div style={{ padding: 24 }}>Account Billing</div>}
                />

                <Route
                  path="/corporate/team"
                  element={<div style={{ padding: 24 }}>Corporate Team</div>}
                />
                <Route
                  path="/corporate/company"
                  element={<div style={{ padding: 24 }}>Corporate Company</div>}
                />

                <Route
                  path="/blog/posts"
                  element={<div style={{ padding: 24 }}>Blog Posts</div>}
                />
                <Route
                  path="/blog/categories"
                  element={<div style={{ padding: 24 }}>Blog Categories</div>}
                />

                <Route
                  path="/social/feed"
                  element={<div style={{ padding: 24 }}>Social Feed</div>}
                />
                <Route
                  path="/social/messages"
                  element={<div style={{ padding: 24 }}>Social Messages</div>}
                />

                {/* Fallback for old MainContent route */}
                <Route path="/main" element={<MainContent />} />

                {/* Catch all route - redirect to main content */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Content>

            {/* Uncomment if you want to show the notification panel
            <Layout
              style={{
                position: "absolute",
                right: 0,
                width: "325px",
                borderLeft: "1px solid #f0f0f0",
                backgroundColor: "white",
                overflow: "auto",
                zIndex: -1
              }}
            >
              <NotificationPanel />
            </Layout> */}
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
