import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Preinscripcion from "./Preinscripcion.jsx";
import PreguntasFrecuentes from './PreguntasFrecuentes';
import ContactoPage from './ContactoPage.jsx'; // 👈 NUEVA IMPORTACIÓN
import Programa from './Programa.jsx';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/preinscripcion" element={<Preinscripcion />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/contacto" element={<ContactoPage />} /> {/* 👈 NUEVA RUTA */}
        <Route path="/programa" element={<Programa />} />

      </Routes>
    </Router>
  );
}
