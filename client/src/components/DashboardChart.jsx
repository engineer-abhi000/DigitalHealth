import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

const DashboardChart = ({ appointments, reports }) => {
  const data = [
    { name: "Appointments", value: appointments },
    { name: "Reports", value: reports },
  ];

  const COLORS = ["#4f8cff", "#00c49f"];

  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default DashboardChart;