const router = require("express").Router();
const {
  bookAppointment,
  getAppointments
} = require("../controllers/appointmentController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/", bookAppointment);
router.post("/", verifyToken, (req, res) => {
  const userId = req.user.id;
  const { doctorId, date } = req.body;

  const sql =
    "INSERT INTO appointments (user_id, doctor_id, date) VALUES (?, ?, ?)";

  db.query(sql, [userId, doctorId, date], (err) => {
    if (err) return res.json({ success: false });

    res.json({ success: true });
  });
});
router.get("/", getAppointments);
router.get("/", verifyToken, (req, res) => {
  const userId = req.user.id;

  const sql = "SELECT * FROM appointments WHERE user_id=?";

  db.query(sql, [userId], (err, result) => {
    if (err) return res.json([]);

    res.json(result); // ✅ array
  });
});

module.exports = router;
