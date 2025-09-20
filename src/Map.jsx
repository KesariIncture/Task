import { Card, Progress } from "antd";
import map from "./assets/Map.png";

const Map = () => {
  const locations = [
    { name: "New York", revenue: 72, percent: 72 },
    { name: "San Francisco", revenue: 39, percent: 39 },
    { name: "Sydney", revenue: 25, percent: 25 },
    { name: "Singapore", revenue: 61, percent: 61 },
  ];

  return (
    <Card style={{ maxWidth: "400px" }}>
      <img src={map} alt="Map" width={300}></img>
      {locations.map((loc) => (
        <div key={loc.name}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{loc.name}</span>
            <span>{loc.revenue}K</span>
          </div>
          <Progress percent={loc.percent} showInfo={false} strokeWidth={1} />
        </div>
      ))}
    </Card>
  );
};

export default Map;
