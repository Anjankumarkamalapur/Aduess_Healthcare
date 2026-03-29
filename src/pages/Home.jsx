import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import Features from "../components/Features";
import SymptomSection from "../components/SymptomSection";
import Roles from "../components/Roles";
import Contact from "../components/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {/* Make sure each component has correct IDs */}
      <div id="hero">
        <Hero />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="symptoms">
        <SymptomSection />
      </div>

      <Roles />

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;