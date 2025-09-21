import { Table, Typography } from "antd";

const ProductsTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span style={{ color: "#666" }}>{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <span style={{ color: "#666" }}>{text}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <span style={{ color: "#666" }}>{text}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span style={{ color: "#666" }}>{text}</span>,
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: "82",
      amount: "$6,518.18",
    },
    {
      key: "2",
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: "37",
      amount: "$4,754.50",
    },
    {
      key: "3",
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: "64",
      amount: "$2,559.36",
    },
    {
      key: "4",
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: "184",
      amount: "$3,680.00",
    },
    {
      key: "5",
      name: "Marco Shoes",
      price: "$79.49",
      quantity: "64",
      amount: "$1,965.81",
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f7f9fb",
        borderRadius: "12px",
      }}
    >
      <Typography
        style={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Revenue
      </Typography>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        showHeader={true}
        size="middle"
      />
    </div>
  );
};

export default ProductsTable;
