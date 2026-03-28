import { Routes, Route } from "react-router-dom";
import PatientDashboard from "../pages/PatientDashboard";
import DoctorsList from "../pages/DoctorsList";
import Appointments from "../pages/Appointments";
import Records from "../pages/Records";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PatientDashboard />} />
      <Route path="/doctors" element={<DoctorsList />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/records" element={<Records />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;