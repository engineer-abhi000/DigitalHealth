const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.json({ success: false });

    if (result.length === 0) {
      return res.json({ success: false });
    }

    const user = result[0];
    // compare login password with store password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({ success: false });
    }

    // 🔑 Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.json({
      success: true,
      token,
      user,
    });
  });
};

exports.registerTestUser = async (req, res) => {
  const bcrypt = require("bcrypt");

  const email = "test@gmail.com";
  const password = "123456";

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

  db.query(sql, [email, hashedPassword], (err) => {
    if (err) return res.send("Error");

    res.send("User Created");
  });
};

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user exists
    const checkSql = "SELECT * FROM users WHERE email=?";
    db.query(checkSql, [email], async (err, result) => {
      if (result.length > 0) {
        return res.json({ success: false, message: "User already exists" });
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // insert user
      const insertSql = "INSERT INTO users (email, password) VALUES (?, ?)";

      db.query(insertSql, [email, hashedPassword], (err) => {
        if (err) return res.json({ success: false });

        res.json({ success: true });
      });
    });

  } catch (error) {
    res.status(500).json({ success: false });
  }
};