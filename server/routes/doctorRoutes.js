const router = require("express").Router();
const {
  getDoctors,
  addDoctor
} = require("../controllers/doctorController");

router.get("/", getDoctors);
router.post("/", addDoctor);

module.exports = router;
