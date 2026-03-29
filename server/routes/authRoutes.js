const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerTestUser,   
} = require("../controllers/authController");

router.get("/create-test", registerTestUser);

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;