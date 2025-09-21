import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import React from "react";
import { Typography } from "antd";

const ProjectionsChart = ({ width = "90%", height = 300 }) => {
  const chartData = [
    { month: "Jan", bottom: 18, top: 2 },
    { month: "Feb", bottom: 22, top: 3 },
    { month: "Mar", bottom: 19, top: 1 },
    { month: "Apr", bottom: 26, top: 2 },
    { month: "May", bottom: 16, top: 2 },
    { month: "Jun", bottom: 23, top: 2 },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f7f9fb",
        padding: "20px",
        height: height,
      }}
    >
      <Typography style={{ fontSize: "14px", fontWeight: "600" }}>
        Projections vs Actuals
      </Typography>

      <ResponsiveContainer width={width} height={height - 60}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, bottom: 5 }}
          barCategoryGap="5%"
        >
          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#e0e0e0", strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            tickFormatter={(value) => `${value}M`}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
          />
          <Bar
            dataKey="bottom"
            stackId="a"
            fill="#A8C7DA"
            radius={[0, 0, 0, 0]}
            maxBarSize={20}
          />
          <Bar
            dataKey="top"
            stackId="a"
            fill="#c9d8e4"
            radius={[4, 4, 0, 0]}
            maxBarSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsChart;
