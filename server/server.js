const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const verifyToken = require("./middleware/authMiddleware");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/api/dashboard-data", verifyToken, (req, res) => {
  const userId = req.user.id;
  const role = req.user.role;

  console.log("USER 👉", req.user);

  if (role === "patient") {
    const appointmentQuery =
      "SELECT COUNT(*) AS count FROM appointments WHERE user_id=?";

    const reportQuery =
      "SELECT COUNT(*) AS count FROM reports WHERE user_id=?";

    db.query(appointmentQuery, [userId], (err, appResult) => {
      console.log("APPOINTMENTS 👉", appResult);

      db.query(reportQuery, [userId], (err, reportResult) => {
        console.log("REPORTS 👉", reportResult);
        
        console.log("USER ID 👉", userId);

        res.json({
          healthScore: 85,
          appointments: appResult[0].count,
          reports: reportResult[0].count,
        });
      });
    });
  }
});

app.listen(5000, () =>
  console.log("Server running on port 5000")
);



// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body;

//   const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

//   db.query(sql, [email, password], (err, result) => {
//     if (err) return res.json({ success: false });

//     if (result.length > 0) {
//       res.json({
//         success: true,
//         user: result[0],
//         token: "dummy-token",
//       });
//     } else {
//       res.json({ success: false });
//     }
//   });
// });
