function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <img src="/assets/doctor.png" alt="doctor" />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <button>Book</button>
    </div>
  );
}

export default DoctorCard;
