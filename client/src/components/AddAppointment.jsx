import { useState } from "react";
import { createAppointment } from "../services/appointmentService";

const AddAppointment = ({ onSuccess }) => {
  const [formData , setFormData] = useState({
    patient_name:"",
    doctor_name:"",
    appointment_date:""
  });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    await createAppointment(formData);

    setFormData({
      patient_name: "",
      doctor_name: "",
      appointment_date: ""
    });

    alert("Appointment Added ✅");

    if (onSuccess) onSuccess();

  };

  return(
    <form onSubmit={handleSubmit}>
      <h3>Add Appointment</h3>

      <input
        type="text"
        name="patient_name"
        placeholder="Patient Name"
        value={formData.patient_name}
        onChange={handleChange}
        required
      />

       <input
        type="text"
        name="doctor_name"
        placeholder="Doctor Name"
        value={formData.doctor_name}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="appointment_date"
        value={formData.appointment_date}
        onChange={handleChange}
        required
      />

      <button type="submit">Save</button>
    </form>
  )
}

export default AddAppointment;