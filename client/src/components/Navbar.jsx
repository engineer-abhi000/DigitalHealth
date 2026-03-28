import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
  };
  const toggleTheme = () => {
  document.body.classList.toggle("light-mode");
};

  return (
    <div className="navbar">
      <FaBars onClick={toggleSidebar} style={{ cursor: "pointer" }} />
      <h2>Digital Health</h2>

      <div className="nav-right">
        <span>Welcome, Patient</span>
        <button className="logout-btn">Logout</button>
        <button onClick={toggleTheme}>Toggle Mode</button>
      </div>
    </div>
  );
}

export default Navbar;