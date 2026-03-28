const db = require("../config/db");

// Book appointment
exports.bookAppointment = (req, res) => {
  const { patient_id, doctor_id, date, time } =
    req.body;

  db.query(
    "INSERT INTO appointments (patient_id,doctor_id,date,time,status) VALUES (?,?,?,?,?)",
    [patient_id, doctor_id, date, time, "Pending"],
    () => res.send("Appointment Booked")
  );
};

// Get patient appointments
exports.getAppointments = (req, res) => {
  db.query(
    "SELECT * FROM appointments WHERE patient_id=?",
    [req.params.id],
    (err, result) => res.send(result)
  );
};
