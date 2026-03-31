import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import KidneyPrediction from "./pages/KidneyPrediction.jsx";
import HeartPrediction from "./pages/HeartPrediction.jsx";

import SymptomForm from "./components/SymptomForm";
import AppointmentForm from "./components/AppointmentForm";
import LiverForm from "./components/LiverForm";
import DiabetesForm from "./components/DiabetesForm";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

import ChatBot from "./components/ChatBot.jsx";

// 🔒 Protected Route (login required)
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

// 🔒 Admin Route (role based)
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;
  if (role !== "admin") return <Navigate to="/" replace />;

  return children;
};

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />

      <Routes>
        {/* 🔓 Public Routes */}
        <Route
          path="/login"
          element={
            token ? <Navigate to="/" replace /> : <Login />
          }
        />
        <Route
          path="/register"
          element={
            token ? <Navigate to="/" replace /> : <Register />
          }
        />

        {/* 🔒 Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/kidney"
          element={
            <ProtectedRoute>
              <KidneyPrediction />
            </ProtectedRoute>
          }
        />

        <Route
          path="/heart"
          element={
            <ProtectedRoute>
              <HeartPrediction />
            </ProtectedRoute>
          }
        />

        <Route
          path="/symptoms"
          element={
            <ProtectedRoute>
              <SymptomForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <AppointmentForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/liver"
          element={
            <ProtectedRoute>
              <LiverForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/diabetes"
          element={
            <ProtectedRoute>
              <DiabetesForm />
            </ProtectedRoute>
          }
        />

        {/* 🔒 Admin Only */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>

      {/* 🔥 CHATBOT only when logged in */}
      {token && <ChatBot />}

      <Footer />
    </BrowserRouter>
  );
}

export default App;