import { useEffect, useState } from "react";
import { createAppointment } from "../services/appointmentService";
import { Modal, Button, Form } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
  doctorId: "",
  date: ""
});

//  const fetchAppointments = async () => {
//   try {
//     console.log("API Data:", res.data); // 👈 debug
//     setAppointments(res.data);
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//   }
// };

  useEffect(() => {
  fetch("http://localhost:5000/api/appointments", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then(res => res.json())
    .then(data => {
  const finalData = Array.isArray(data) ? data : data.data;
  setAppointments(finalData);
});
}, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await createAppointment(formData);

    // 🔥 Immediately update UI without waiting for API refetch
    setAppointments((prev) => [...prev, res.data]);

    setFormData({
      patient_name: "",
      doctor_name: "",
      appointment_date: ""
    });

    setShow(false);
  } catch (error) {
    console.error("Error creating appointment:", error);
  }
};

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        {/* Header */}
        <div className="d-flex justify-content-between mb-3">
          <h2>Appointments</h2>
          <Button variant="primary" onClick={handleShow}>
            + Add Appointment
          </Button>
        </div>

        {/* Table */}
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(appointments) &&
              appointments.map((app) => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.user_id}</td>
                  <td>{app.doctor_id}</td>
                  <td>{app.date}</td>
                  <td>Scheduled</td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Appointment</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  type="text"
                  name="patient_name"
                  value={formData.patient_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control
                  type="text"
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Save Appointment
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Appointments;