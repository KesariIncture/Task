import { TrendUpIcon } from "@phosphor-icons/react";
import { Card, Typography, Row, Col } from "antd";
import React from "react";

const StatsCards = () => {
  const { Text } = Typography;

  const cardData = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01",
      backgroundColor: "#E4F5FF",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03",
      backgroundColor: "#f7f9f5",
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03",
      backgroundColor: "#f7f9f5",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08",
      backgroundColor: "#E5ECF6",
    },
  ];

  return (
    <div style={{ marginTop: "24px", maxWidth: "400px" }}>
      <Row gutter={[16, 16]}>
        {cardData.map((card, index) => (
          <Col xs={24} sm={12} md={12} lg={12} xl={12} key={index}>
            <Card
              size="small"
              style={{
                width: "100%",
                maxWidth: 200,
                backgroundColor: card.backgroundColor,
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              <Text style={{ fontSize: "14px", fontWeight: "600" }}>
                {card.title}
              </Text>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: "25px", fontWeight: "600" }}>
                  {card.value}
                </Text>
                <Text>
                  {card.change} <TrendUpIcon />
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StatsCards;
