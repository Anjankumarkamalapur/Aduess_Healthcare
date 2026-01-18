import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000"
});

export const predictKidney = (data) =>
  API.post("/api/kidney-predict", data);

export const predictHeart = (data) =>
  API.post("/api/heart-predict", data);

export const predictSymptoms = (data) =>
  API.post("/api/symptom-predict", data);

export const bookAppointment = (data) =>
  API.post("/api/book-appointment", data);

export const predictLiver = (data) =>
  API.post("/api/liver-predict", data);

export const predictDiabetes = (data) =>
  API.post("/api/diabetes-predict", data);

