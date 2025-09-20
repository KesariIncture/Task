import { TrendUpIcon } from "@phosphor-icons/react";
import { Card, Typography } from "antd";
import React from "react";

const MainContent = () => {
  const { Text } = Typography;

  return (
    <div
      style={{
        background: "white",
        minHeight: "100%",
        padding: "24px",
      }}
    >
      <Text style={{ fontSize: "14px", fontWeight: "600" }}>eCommerce</Text>

      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 200px)",
          gridTemplateRows: "repeat(2, auto)",
          gap: "16px",
        }}
      >
        <Card
          size="small"
          style={{
            width: 200,
            backgroundColor: "#E4F5FF",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <Text style={{ fontSize: "14px", fontWeight: "600" }}>Customers</Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: "25px", fontWeight: "600" }}>3,781</Text>
            <Text>
              +11.01 <TrendUpIcon />
            </Text>
          </div>
        </Card>

        <Card
          size="small"
          style={{
            width: 200,
            backgroundColor: "#f7f9f5",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <Text style={{ fontSize: "14px", fontWeight: "600" }}>Orders</Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: "25px", fontWeight: "600" }}>1,219</Text>
            <Text>
              -0.03 <TrendUpIcon />
            </Text>
          </div>
        </Card>

        <Card
          size="small"
          style={{
            width: 200,
            backgroundColor: "#f7f9f5",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <Text style={{ fontSize: "14px", fontWeight: "600" }}>Revenue</Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: "25px", fontWeight: "600" }}>$695</Text>
            <Text>
              +15.03 <TrendUpIcon />
            </Text>
          </div>
        </Card>

        <Card
          size="small"
          style={{
            width: 200,
            backgroundColor: "#E5ECF6",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <Text style={{ fontSize: "14px", fontWeight: "600" }}>Growth</Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: "25px", fontWeight: "600" }}>30.1%</Text>
            <Text>
              +6.08 <TrendUpIcon />
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MainContent;
