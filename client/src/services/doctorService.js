import API from "./api";

export const getDoctors = () =>
  API.get("/doctors");
