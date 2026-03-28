function AppointmentCard({ data }) {
  return (
    <div className="card">
      <h4>{data.doctor}</h4>
      <p>{data.date}</p>
      <p>Status: {data.status}</p>
    </div>
  );
}

export default AppointmentCard;
