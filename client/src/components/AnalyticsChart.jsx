import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", score: 70 },
  { month: "Feb", score: 75 },
  { month: "Mar", score: 80 },
  { month: "Apr", score: 85 },
  { month: "May", score: 88 }
];

function AnalyticsChart() {
  return (
    <div className="dashboard-card" style={{ width: "600px" }}>
      <h3>Health Progress</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;