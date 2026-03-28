import MainLayout from "../layouts/MainLayout";
import HealthScore from "../components/HealthScore";

function PatientDashboard() {
  return (
    <MainLayout>
      <h1>Patient Dashboard</h1>

      <div className="dashboard-grid">
        <HealthScore score={85} />

        <div className="dashboard-card">
          <h3>Upcoming Appointments</h3>
          <h2>3</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Reports</h3>
          <h2>12</h2>
        </div>
      </div>
    </MainLayout>
  );
}

export default PatientDashboard;