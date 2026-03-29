const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(5000, () =>
  console.log("Server running on port 5000")
);

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.json({ success: false });

    if (result.length > 0) {
      res.json({
        success: true,
        user: result[0],
        token: "dummy-token",
      });
    } else {
      res.json({ success: false });
    }
  });
});
