import React from "react";
import { Avatar, List, Typography, Space } from "antd";
import { BugOutlined, UserOutlined, WifiOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const NotificationPanel = () => {
  const notifications = [
    {
      id: 1,
      icon: <BugOutlined style={{ color: "#52c41a", fontSize: "16px" }} />,
      title: "You have a bug that needs...",
      time: "Just now",
      type: "notification",
    },
    {
      id: 2,
      icon: <UserOutlined style={{ color: "#1890ff", fontSize: "16px" }} />,
      title: "New user registered",
      time: "59 minutes ago",
      type: "notification",
    },
    {
      id: 3,
      icon: <BugOutlined style={{ color: "#52c41a", fontSize: "16px" }} />,
      title: "You have a bug that needs...",
      time: "12 hours ago",
      type: "notification",
    },
    {
      id: 4,
      icon: <WifiOutlined style={{ color: "#722ed1", fontSize: "16px" }} />,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      type: "notification",
    },
  ];

  const activities = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/32x32/52c41a/ffffff?text=B",
      title: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/32x32/fa541c/ffffff?text=R",
      title: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/32x32/1890ff/ffffff?text=S",
      title: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatar: "https://via.placeholder.com/32x32/722ed1/ffffff?text=M",
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      avatar: "https://via.placeholder.com/32x32/f5222d/ffffff?text=D",
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/32x32/8c8c8c/ffffff?text=N",
      name: "Natali Craig",
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/32x32/f5222d/ffffff?text=D",
      name: "Drew Cano",
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/32x32/fa8c16/ffffff?text=O",
      name: "Orlando Diggs",
    },
    {
      id: 4,
      avatar: "https://via.placeholder.com/32x32/a0845c/ffffff?text=A",
      name: "Andi Lane",
    },
  ];

  const renderNotificationItem = (item) => (
    <List.Item style={{ padding: "12px 0", border: "none" }}>
      <List.Item.Meta
        avatar={
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </div>
        }
        title={
          <Text style={{ fontSize: "14px", color: "#262626", fontWeight: 400 }}>
            {item.title}
          </Text>
        }
        description={
          <Text style={{ fontSize: "12px", color: "#8c8c8c" }}>
            {item.time}
          </Text>
        }
      />
    </List.Item>
  );

  const renderActivityItem = (item) => (
    <List.Item style={{ padding: "12px 0", border: "none" }}>
      <List.Item.Meta
        avatar={<Avatar size={32} src={item.avatar} />}
        title={
          <Text style={{ fontSize: "14px", color: "#262626", fontWeight: 400 }}>
            {item.title}
          </Text>
        }
        description={
          <Text style={{ fontSize: "12px", color: "#8c8c8c" }}>
            {item.time}
          </Text>
        }
      />
    </List.Item>
  );

  const renderContactItem = (item) => (
    <List.Item style={{ padding: "8px 0", border: "none" }}>
      <List.Item.Meta
        avatar={<Avatar size={32} src={item.avatar} />}
        title={
          <Text style={{ fontSize: "14px", color: "#262626", fontWeight: 400 }}>
            {item.name}
          </Text>
        }
      />
    </List.Item>
  );

  return (
    <div
      style={{
        width: "320px",
        backgroundColor: "#ffffff",
        border: "1px solid #f0f0f0",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Notifications Section */}
      <div style={{ padding: "16px" }}>
        <List
          dataSource={notifications}
          renderItem={renderNotificationItem}
          split={false}
        />
      </div>

      {/* Activities Section */}
      <div style={{ padding: "0 16px 16px 16px" }}>
        <Title
          level={5}
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#262626",
            marginBottom: "16px",
            marginTop: "8px",
          }}
        >
          Activities
        </Title>
        <List
          dataSource={activities}
          renderItem={renderActivityItem}
          split={false}
        />
      </div>

      {/* Contacts Section */}
      <div style={{ padding: "0 16px 16px 16px" }}>
        <Title
          level={5}
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#262626",
            marginBottom: "16px",
            marginTop: "8px",
          }}
        >
          Contacts
        </Title>
        <List
          dataSource={contacts}
          renderItem={renderContactItem}
          split={false}
        />
      </div>
    </div>
  );
};

export default NotificationPanel;
