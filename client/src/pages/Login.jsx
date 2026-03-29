import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        if (data.user.role === "doctor") {
          navigate("/doctor");
        } else {
          navigate("/patient");
        }       // go to dashboard
      } else {
        alert(data.message || "Invalid Email or Password");
      }
    } catch (error) {
      console.log("ERROR 👉", error); 
    alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back 👋</h2>

      <label>Enter Email :</label> <br />
      <div className="input-group">
      <i className="fa fa-envelope"></i>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

      <label>Enter Password :</label> <br />
      <div className="input-group">
        <i className="fa fa-lock"></i>
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <span className="toggle-eye" onClick={() => setShow(!show)}>
          <i className={`fa ${show ? "fa-eye-slash" : "fa-eye"}`}></i>
        </span>
      </div>

      <button className="login" onClick={handleLogin}>
        Login
      </button>
      <div className="auth-links">
        If you're a new user? 
        <span onClick={() => navigate("/register")}>
          Register
        </span>
    </div>
    </div>
    </div>
  );
}

export default Login;