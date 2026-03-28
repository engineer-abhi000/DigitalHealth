import MainLayout from "../layouts/MainLayout";
import DoctorCard from "../components/DoctorCard";

function DoctorsList() {
  const doctors = [
    { name: "Dr John", specialization: "Cardiologist" },
  ];

  return (
    <MainLayout>
      <h1>Doctors</h1>

      <div className="dashboard-grid">
        {doctors.map((d, i) => (
          <div className="dashboard-card" key={i}>
            <h3>{d.name}</h3>
            <p>{d.specialization}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default DoctorsList;