import { Card, Typography } from "antd";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const SalesChart = () => {
  const data = [
    { name: "Direct", value: 300.56, percentage: 38.6 },
    { name: "Affiliate", value: 135.18, percentage: 17.3 },
    { name: "Sponsored", value: 154.02, percentage: 19.8 },
    { name: "E-mail", value: 48.96, percentage: 6.3 },
  ];

  const COLORS = {
    Direct: "#1c1c1c",
    Affiliate: "#baedbd",
    Sponsored: "#95a4fc",
    "E-mail": "#b1e3ff",
  };

  const legendItems = [
    { name: "Direct", value: "$300.56", color: "#1c1c1c" },
    { name: "Affiliate", value: "$135.18", color: "#baedbd" },
    { name: "Sponsored", value: "$154.02", color: "#95a4fc" },
    { name: "E-mail", value: "$48.96", color: "#b1e3ff" },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { percentage } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          {`${percentage}%`}
        </div>
      );
    }
    return null;
  };

  return (
    <Card
      style={{
        backgroundColor: "#f7f9fb",
        maxWidth: "280px",
      }}
    >
      <Typography
        style={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Total Sales
      </Typography>
      <div
        style={{ position: "relative", height: "200px", marginBottom: "24px" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
              startAngle={90}
              endAngle={450}
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "16px" }}>
        {legendItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
              fontSize: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  marginRight: "8px",
                }}
              ></div>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SalesChart;
