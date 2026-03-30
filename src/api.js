import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

// 🔐 Attach token automatically to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});


// ================= AUTH =================

// REGISTER
export const registerUser = (data) =>
  API.post("/api/auth/register", data);

// LOGIN
export const loginUser = (data) =>
  API.post("/api/auth/login", data);


// ================= ML APIs =================

export const predictKidney = (data) =>
  API.post("/api/kidney-predict", data);

export const predictHeart = (data) =>
  API.post("/api/heart-predict", data);

export const predictSymptoms = (data) =>
  API.post("/api/symptom-predict", data);

export const predictLiver = (data) =>
  API.post("/api/liver-predict", data);

export const predictDiabetes = (data) =>
  API.post("/api/diabetes-predict", data);


// ================= APPOINTMENT =================

// BOOK (now protected)
export const bookAppointment = (data) =>
  API.post("/api/appointments", data);

// ADMIN: GET ALL
export const getAppointments = () =>
  API.get("/api/appointments");

// ADMIN: UPDATE STATUS
export const updateAppointment = (id, status) =>
  API.put(`/api/appointments/${id}`, { status });