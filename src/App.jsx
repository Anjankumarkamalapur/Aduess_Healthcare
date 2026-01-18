import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import KidneyPrediction from "./pages/KidneyPrediction.jsx";
import HeartPrediction from "./pages/HeartPrediction.jsx";
import SymptomForm from "./components/SymptomForm";
import AppointmentForm from "./components/AppointmentForm";
import LiverForm from "./components/LiverForm";
import ScrollToTop from "./components/ScrollToTop";
import DiabetesForm from "./components/DiabetesForm";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kidney" element={<KidneyPrediction />} />
        <Route path="/heart" element={<HeartPrediction />} />
        <Route path="/symptoms" element={<SymptomForm />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/liver" element={<LiverForm />} />
        <Route path="/diabetes" element={<DiabetesForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;