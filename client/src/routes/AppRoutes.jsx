import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PatientDashboard from "../pages/PatientDashboard";
import DoctorsList from "../pages/DoctorsList";
import Appointments from "../pages/Appointments";
import Records from "../pages/Records";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register";
import DoctorDashboard from "../pages/DoctorDashboard";

function AppRoutes() {
  return (
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        {/* {Register Page} */}
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute role="doctor">
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient"
          element={
            <ProtectedRoute role="patient">
              <PatientDashboard />
            </ProtectedRoute>
          }
        />     
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/records" element={<Records />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}

export default AppRoutes;