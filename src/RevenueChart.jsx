import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import React from "react";

const RevenueChart = ({ width = "90%", height = 500 }) => {
  const chartData = [
    { month: "Jan", currentWeek: 12, previousWeek: 8, currentWeekDashed: null },
    { month: "Feb", currentWeek: 9, previousWeek: 16, currentWeekDashed: null },
    { month: "Mar", currentWeek: 8, previousWeek: 17, currentWeekDashed: null },
    {
      month: "Apr",
      currentWeek: 14,
      previousWeek: 12,
      currentWeekDashed: null,
    },
    { month: "May", currentWeek: 18, previousWeek: 10, currentWeekDashed: 18 },
    {
      month: "Jun",
      currentWeek: null,
      previousWeek: 20,
      currentWeekDashed: 21,
    },
  ];

  const Legend = ({ color, label, value }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />
      <span style={{ fontSize: "14px" }}>{label}</span>
      <span style={{ fontSize: "14px" }}>{value}</span>
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: "#f7f9fb",
        borderRadius: "12px",
        height: height,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginLeft: "70px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Revenue
        </div>
        <div style={{ color: "lightgrey" }}>|</div>
        <Legend color="#333" label="Current Week" value="$58,211" />
        <Legend color="#a8c5da" label="Previous Week" value="$68,768" />
      </div>

      <ResponsiveContainer width={width} height={height - 120}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
        >
          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#e0e0e0", strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#999" }}
            tickMargin={15}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#999" }}
            tickFormatter={(value) => `${value}M`}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            width={50}
            tickMargin={10}
          />

          <Line
            type="natural"
            dataKey="previousWeek"
            stroke="#a8c5da"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4, fill: "#a8c5da" }}
            connectNulls={false}
          />

          <Line
            type="natural"
            dataKey="currentWeek"
            stroke="#333"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4, fill: "black" }}
            connectNulls={false}
          />

          <Line
            type="natural"
            dataKey="currentWeekDashed"
            stroke="#333"
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={false}
            activeDot={{ r: 4, fill: "black" }}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
