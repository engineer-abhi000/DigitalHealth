import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaCalendarCheck,
  FaFileMedical,
  FaCreditCard,
  FaUser
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Digital Health</div>

      <NavLink to="/patient">
        <FaHome /> Dashboard
      </NavLink>

      <NavLink to="/doctors">
        <FaUserMd /> Doctors
      </NavLink>

      <NavLink to="/appointments">
        <FaCalendarCheck /> Appointments
      </NavLink>

      <NavLink to="/records">
        <FaFileMedical /> Records
      </NavLink>

      <NavLink to="/payments">
        <FaCreditCard /> Payments
      </NavLink>

      <NavLink to="/profile">
        <FaUser /> Profile
      </NavLink>
    </div>
  );
}

export default Sidebar;