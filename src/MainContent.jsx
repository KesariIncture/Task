import { TrendUpIcon } from "@phosphor-icons/react";
import { Col, Row, Typography } from "antd";
import React from "react";
import ProjectionsChart from "./ProjectionsChart";
import StatsCards from "./StatsCards";
import RevenueChart from "./RevenueChart";

const MainContent = () => {
  const { Text } = Typography;

  return (
    <>
      <div style={{ minHeight: "100%", backgroundColor: "white" }}>
        <Row style={{ padding: "20px" }}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <StatsCards />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <ProjectionsChart />
          </Col>
        </Row>
        <Row style={{ padding: "20px" }}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <RevenueChart />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <ProjectionsChart />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainContent;
