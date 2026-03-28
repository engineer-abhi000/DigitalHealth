import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <label>Enter Email :</label> <br></br>
      <input placeholder="Email" /><br></br>
      <label>Enter Password :</label> <br></br>
      <input placeholder="Password" type="password" />

      <button className="login" onClick={() => navigate("/patient")}>
        Login
      </button>
    </div>
  );
}

export default Login;
