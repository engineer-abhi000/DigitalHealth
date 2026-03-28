import API from "./api";
import axios  from "axios";

export const bookAppointment = (data) =>
  API.post("/appointments", data);

const API_URL = "http://localhost:5000/api/appointments";

export const getAppointments = ()=> axios.get(API_URL);

export const createAppointment = (data) => axios.post(API_URL , data)

