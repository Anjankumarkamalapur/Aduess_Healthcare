import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 10000, // ⏱ prevent infinite loading
});

// 🔐 Attach token automatically
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = token;
    }

    req.headers["Content-Type"] = "application/json";

    return req;
  },
  (error) => Promise.reject(error)
);

// 🚨 Global error handling
API.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API ERROR:", error.response?.data || error.message);

    // 🔒 Auto logout if token expired / unauthorized
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

// ================= AUTH =================

export const registerUser = (data) =>
  API.post("/api/auth/register", data);

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

// ================= APPOINTMENTS =================

// ✅ Book Appointment (protected)
export const bookAppointment = (data) =>
  API.post("/api/appointments", data);

// ✅ Admin: Get all appointments
export const getAppointments = () =>
  API.get("/api/appointments");

// ✅ Admin: Update appointment status
export const updateAppointment = (id, status) =>
  API.put(`/api/appointments/${id}`, { status });

// ================= AI CHAT =================

export const askAI = (message) =>
  API.post("/api/chat", { message });