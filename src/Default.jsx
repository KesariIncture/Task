import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Input,
  Avatar,
  Pagination,
  Checkbox,
  Spin,
  Drawer,
  Tag,
} from "antd";
import {
  PlusOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  SearchOutlined,
  MoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  UserOutlined,
  ProjectOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const Default = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(["#CM9804"]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and set mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Simulate data loading with a 2-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      key: "#CM9801",
      orderId: "#CM9801",
      user: {
        name: "Natali Craig",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      key: "#CM9802",
      orderId: "#CM9802",
      user: {
        name: "Kate Morrison",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      key: "#CM9803",
      orderId: "#CM9803",
      user: {
        name: "Drew Cano",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      key: "#CM9804",
      orderId: "#CM9804",
      user: {
        name: "Orlando Diggs",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      key: "#CM9805",
      orderId: "#CM9805",
      user: {
        name: "Andi Lane",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
      hasLink: true,
    },
    {
      key: "#CM9801-2",
      orderId: "#CM9801",
      user: {
        name: "Natali Craig",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      key: "#CM9802-2",
      orderId: "#CM9802",
      user: {
        name: "Kate Morrison",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      key: "#CM9803-2",
      orderId: "#CM9803",
      user: {
        name: "Drew Cano",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      key: "#CM9804-2",
      orderId: "#CM9804",
      user: {
        name: "Orlando Diggs",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      key: "#CM9805-2",
      orderId: "#CM9805",
      user: {
        name: "Andi Lane",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "#1890ff";
      case "Complete":
        return "#52c41a";
      case "Pending":
        return "#13c2c2";
      case "Approved":
        return "#faad14";
      case "Rejected":
        return "#8c8c8c";
      default:
        return "#d9d9d9";
    }
  };

  const getDateSortValue = (dateText) => {
    const now = new Date();
    switch (dateText) {
      case "Just now":
        return now.getTime();
      case "A minute ago":
        return now.getTime() - 60000;
      case "1 hour ago":
        return now.getTime() - 3600000;
      case "Yesterday":
        return now.getTime() - 86400000;
      case "Feb 2, 2023":
        return new Date("2023-02-02").getTime();
      default:
        return 0;
    }
  };

  const filteredData = data.filter((item) =>
    [
      item.orderId,
      item.user.name,
      item.project,
      item.address,
      item.status,
    ].some((field) => field.toLowerCase().includes(searchText.toLowerCase()))
  );

  // Mobile card view component
  const MobileCard = ({ record }) => (
    <div
      className="mobile-card"
      style={{
        border: "1px solid #f0f0f0",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        backgroundColor: selectedRowKeys.includes(record.key)
          ? "#f6ffed"
          : "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Checkbox
            checked={selectedRowKeys.includes(record.key)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRowKeys([...selectedRowKeys, record.key]);
              } else {
                setSelectedRowKeys(
                  selectedRowKeys.filter((key) => key !== record.key)
                );
              }
            }}
          />
          <span style={{ fontWeight: 600, fontSize: "16px", color: "#262626" }}>
            {record.orderId}
          </span>
        </div>
        <Button
          type="text"
          icon={<MoreOutlined />}
          style={{ color: "#8c8c8c" }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <UserOutlined style={{ color: "#8c8c8c", fontSize: "14px" }} />
          <Avatar src={record.user.avatar} size={24} />
          <span style={{ fontWeight: 500, color: "#262626" }}>
            {record.user.name}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <ProjectOutlined style={{ color: "#8c8c8c", fontSize: "14px" }} />
          <span style={{ color: "#262626" }}>{record.project}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <HomeOutlined style={{ color: "#8c8c8c", fontSize: "14px" }} />
          <span style={{ color: "#262626" }}>{record.address}</span>
          {record.hasLink && (
            <LinkOutlined style={{ color: "#8c8c8c", fontSize: "12px" }} />
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <CalendarOutlined style={{ color: "#8c8c8c", fontSize: "14px" }} />
          <span style={{ color: "#262626" }}>{record.date}</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: getStatusColor(record.status),
          }}
        />
        <span
          style={{
            color: getStatusColor(record.status),
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {record.status}
        </span>
      </div>
    </div>
  );

  // Desktop table columns
  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      width: 40,
      render: (_, record) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRowKeys([...selectedRowKeys, record.key]);
            } else {
              setSelectedRowKeys(
                selectedRowKeys.filter((key) => key !== record.key)
              );
            }
          }}
        />
      ),
    },
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      sorter: (a, b) => a.orderId.localeCompare(b.orderId),
      render: (text) => (
        <span style={{ fontWeight: 500, color: "#262626" }}>{text}</span>
      ),
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      sorter: (a, b) => a.user.name.localeCompare(b.user.name),
      render: (user) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar src={user.avatar} size={32} />
          <span style={{ fontWeight: 500, color: "#262626" }}>{user.name}</span>
        </div>
      ),
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      sorter: (a, b) => a.project.localeCompare(b.project),
      render: (text) => <span style={{ color: "#262626" }}>{text}</span>,
      responsive: ["md"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ color: "#262626" }}>{text}</span>
          {record.hasLink && (
            <LinkOutlined style={{ color: "#8c8c8c", fontSize: "12px" }} />
          )}
        </div>
      ),
      responsive: ["lg"],
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => getDateSortValue(b.date) - getDateSortValue(a.date),
      render: (text) => (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <CalendarOutlined style={{ color: "#8c8c8c", fontSize: "14px" }} />
          <span style={{ color: "#262626" }}>{text}</span>
        </div>
      ),
      responsive: ["sm"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: getStatusColor(status),
              }}
            />
            <span style={{ color: getStatusColor(status), fontSize: "14px" }}>
              {status}
            </span>
          </div>
          <Button
            type="text"
            icon={<MoreOutlined />}
            style={{ color: "#8c8c8c" }}
          />
        </div>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  return (
    <div
      style={{
        padding: isMobile ? "12px" : "24px",
        backgroundColor: "white",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Spin spinning={loading} tip="Loading orders..." size="large">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: isMobile ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
          }}
        >
          <div
            style={{
              padding: isMobile ? "16px" : "20px 24px",
              borderBottom: "1px solid #f0f0f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "18px" : "20px",
                fontWeight: 600,
                color: "#262626",
              }}
            >
              Order List
            </h2>
          </div>

          <div
            style={{
              padding: isMobile ? "12px 16px" : "16px 24px",
              borderBottom: "1px solid #f0f0f0",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "12px" : "0",
              justifyContent: "space-between",
              alignItems: isMobile ? "stretch" : "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <Button icon={<PlusOutlined />} size="small" disabled={loading} />
              <Button
                icon={<FilterOutlined />}
                size="small"
                disabled={loading}
              />
              <Button
                icon={<SortAscendingOutlined />}
                size="small"
                disabled={loading}
              />
            </div>
            <Search
              placeholder="Search orders"
              style={{ width: isMobile ? "100%" : 200 }}
              prefix={<SearchOutlined />}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              disabled={loading}
            />
          </div>

          {isMobile ? (
            <div style={{ padding: "16px" }}>
              {filteredData.map((record) => (
                <MobileCard key={record.key} record={record} />
              ))}
            </div>
          ) : (
            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={false}
              rowSelection={{
                type: "checkbox",
                selectedRowKeys,
                onChange: setSelectedRowKeys,
                renderCell: () => null,
              }}
              rowClassName={(record) =>
                selectedRowKeys.includes(record.key) ? "selected-row" : ""
              }
              scroll={{ x: 800 }}
            />
          )}

          <div
            style={{
              padding: isMobile ? "12px 16px" : "16px 24px",
              borderTop: "1px solid #f0f0f0",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
            }}
          >
            <Pagination
              current={1}
              total={filteredData.length}
              pageSize={2}
              showSizeChanger={false}
              simple={isMobile}
              disabled={loading}
              size={isMobile ? "small" : "default"}
            />
          </div>
        </div>
      </Spin>

      <style jsx>{`
        .ant-table-tbody > tr.selected-row > td {
          background-color: white !important;
        }
        .ant-table-tbody > tr.selected-row:hover > td {
          background-color: white !important;
        }

        @media (max-width: 768px) {
          .ant-table-wrapper {
            overflow-x: auto;
          }
          .mobile-card {
            transition: all 0.2s ease;
          }
          .mobile-card:hover {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        }

        @media (max-width: 480px) {
          .ant-btn {
            min-width: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default Default;
