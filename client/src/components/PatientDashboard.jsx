import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardChart from "../components/DashboardChart";

function PatientDashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    healthScore: 0,
    appointments: 0,
    reports: 0,
  });

  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard-data", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }

  return (
    <MainLayout>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Patient Dashboard</h1>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">

        {/* Chart Section 🔥 */}
        <div className="dashboard-card">
          <h3>Overview</h3>
          <DashboardChart
            appointments={data.appointments}
            reports={data.reports}
          />
        </div>

        {/* Appointments */}
        <div className="dashboard-card">
          <h3>Upcoming Appointments</h3>
          <h2>{data.appointments}</h2>
        </div>

        {/* Reports */}
        <div className="dashboard-card">
          <h3>Total Reports</h3>
          <h2>{data.reports}</h2>
        </div>
      </div>
    </MainLayout>
  );
}

export default PatientDashboard;