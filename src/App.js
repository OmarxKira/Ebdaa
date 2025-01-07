import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import OurWorks from "./pages/OurWorks";
import Devices from "./pages/Devices";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import useScrollToTop from "./hooks/UseScrollToTop";


const App = () => {

  useScrollToTop();

  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/من-نحن" element={<About />} />
        <Route path="/القياسات-البيئية" element={<Service1 />} />
        <Route path="/الإستشارات-والدراسات-البيئية" element={<Service2 />} />
        <Route path="/العمل-للغير" element={<Service3 />} />
        <Route path="/أعمالنا" element={<OurWorks />} />
        <Route path="/الأجهزة" element={<Devices />} />
        <Route path="/تواصل-معنا" element={<Contact />} />
      </Routes>
      <Footer/>
      </>

  );
};

export default App;
