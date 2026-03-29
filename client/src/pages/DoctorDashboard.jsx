import { useNavigate } from "react-router-dom";

function DoctorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Today's Appointments</h3>
          <h2>12</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Patients</h3>
          <h2>245</h2>
        </div>

        <div className="dashboard-card">
          <h3>Pending Reports</h3>
          <h2>5</h2>
        </div>

      </div>
    </div>
  );
}

export default DoctorDashboard;
