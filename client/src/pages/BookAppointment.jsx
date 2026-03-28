import MainLayout from "../layouts/MainLayout";

function BookAppointment() {
  return (
    <MainLayout>
      <h1>Book Appointment</h1>

      <div className="dashboard-card">
        <input type="date" />
        <br /><br />
        <button className="logout-btn">Book</button>
      </div>
    </MainLayout>
  );
}

export default BookAppointment;