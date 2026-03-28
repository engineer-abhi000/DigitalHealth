const db = require("../config/db");

// Get doctors
exports.getDoctors = (req, res) => {
  db.query(
    `SELECT doctors.*, users.name 
     FROM doctors
     JOIN users ON doctors.user_id = users.id`,
    (err, result) => {
      res.send(result);
    }
  );
};

// Add doctor
exports.addDoctor = (req, res) => {
  const { user_id, specialization, experience, fees } =
    req.body;

  db.query(
    "INSERT INTO doctors (user_id,specialization,experience,fees) VALUES (?,?,?,?)",
    [user_id, specialization, experience, fees],
    () => res.send("Doctor Added")
  );
};
