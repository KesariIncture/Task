import { Avatar, List, Typography, Space } from "antd";
import { BroadcastIcon, BugBeetleIcon, UserIcon } from "@phosphor-icons/react";
import byeWind from "./assets/ByeWind.png";

const { Text, Title } = Typography;

const NotificationPanel = () => {
  const notifications = [
    {
      id: 1,
      icon: <BugBeetleIcon style={{ fontSize: "14px" }} />,
      title: "You have a bug that needs...",
      time: "Just now",
      type: "notification",
    },
    {
      id: 2,
      icon: <UserIcon style={{ fontSize: "14px" }} />,
      title: "New user registered",
      time: "59 minutes ago",
      type: "notification",
    },
    {
      id: 3,
      icon: <BugBeetleIcon style={{ fontSize: "14px" }} />,
      title: "You have a bug that needs...",
      time: "12 hours ago",
      type: "notification",
    },
    {
      id: 4,
      icon: <BroadcastIcon style={{ fontSize: "14px" }} />,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      type: "notification",
    },
  ];

  const activities = [
    {
      id: 1,
      avatar: byeWind,
      title: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: 2,
      avatar: byeWind,
      title: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatar: byeWind,
      title: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatar: byeWind,
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      avatar: byeWind,
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    {
      id: 1,
      avatar: byeWind,
      name: "Natali Craig",
    },
    {
      id: 2,
      avatar: byeWind,
      name: "Drew Cano",
    },
    {
      id: 3,
      avatar: byeWind,
      name: "Orlando Diggs",
    },
    {
      id: 4,
      avatar: byeWind,
      name: "Andi Lane",
    },
  ];

  const renderNotificationItem = (item) => (
    <List.Item style={{ padding: "12px 0", border: "none" }}>
      <List.Item.Meta
        avatar={
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "#e3f5ff",
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
          <Text style={{ fontSize: "14px", fontWeight: 400 }}>{item.name}</Text>
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
      <div style={{ padding: "16px" }}>
        <List
          dataSource={notifications}
          renderItem={renderNotificationItem}
          split={false}
        />
      </div>

      <div style={{ padding: "0 16px 16px 16px" }}>
        <Title
          level={5}
          style={{
            fontSize: "14px",
            fontWeight: 600,
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

      <div style={{ padding: "0 16px 16px 16px" }}>
        <Title
          level={5}
          style={{
            fontSize: "14px",
            fontWeight: 600,
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
