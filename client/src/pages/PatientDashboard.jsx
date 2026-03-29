import MainLayout from "../layouts/MainLayout";
import HealthScore from "../components/HealthScore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PatientDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [data, setData] = useState({
    healthScore: 0,
    appointments: 0,
    reports: 0,
  });
  

  const [loading, setLoading] = useState(true);

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

  return (
    <MainLayout>
      {/* 🔥 Add Logout Button */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Patient Dashboard</h1>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-grid">
        <HealthScore score={data.healthScore} />

      <div className="dashboard-card">
        <h3>Upcoming Appointments</h3>
        <h2>{data.appointments}</h2>
      </div>

      <div className="dashboard-card">
        <h3>Total Reports</h3>
        <h2>{data.reports}</h2>
      </div>
      
      </div>
    </MainLayout>
  );
}


export default PatientDashboard;