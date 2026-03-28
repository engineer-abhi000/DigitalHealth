const db = require("../config/db");
const bcrypt = require("bcryptjs");

// Signup
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hash = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
    [name, email, hash, role],
    (err) => {
      if (err) return res.send(err);
      res.send("User Registered");
    }
  );
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (result.length === 0)
        return res.send("User not found");

      const valid = await bcrypt.compare(
        password,
        result[0].password
      );

      if (!valid)
        return res.send("Wrong password");

      res.send(result[0]);
    }
  );
};
