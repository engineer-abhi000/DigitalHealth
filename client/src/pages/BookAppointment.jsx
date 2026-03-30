import { useState } from "react";

function BookAppointment() {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");

  const handleBook = async () => {
    await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ doctorId, date }),
    });

    alert("Appointment Booked!");
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <input
        placeholder="Doctor ID"
        onChange={(e) => setDoctorId(e.target.value)}
      />

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleBook}>Book</button>
    </div>
  );
}

export default BookAppointment;