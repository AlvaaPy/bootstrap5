import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam ms
      once: true, // Animasi hanya berjalan satu kali saat scroll
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
