import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './nav-bar';
import './fonts.css';

const inputStyle = {
  padding: '12px',
  border: '1px solid #CD4AD1',
  borderRadius: '6px',
  fontSize: '1rem'
};

const selectStyle = {
  padding: '12px',
  border: '1px solid #CD4AD1',
  borderRadius: '6px',
  fontSize: '1rem',
  color: '#8a4fc1',
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxPOU1rHj6KIe6xs3Mf1qCOBXnCFHd-7lMXiSfvg8EJlN1Hge24Njhl-EuirwaQcrNF/exec";

export default function Preinscripcion() {
  const [scrolled, setScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showDatosModal, setShowDatosModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    pais: '',
    codigo: '',
    telefono: '',
    consultora: '',
    estudios: ''
  });

  const countryCodes = {
    Bolivia: '+591',
    Chile: '+56',
    Colombia: '+57',
    Ecuador: '+593',
    México: '+52',
    Perú: '+51',
    'República Dominicana': '+1',
    'El Salvador': '+503',
    Guatemala: '+502',
    'Costa Rica': '+506',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pais') {
      setFormData((prev) => ({
        ...prev,
        pais: value,
        codigo: countryCodes[value] || ''
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      nombre: formData.nombre,
      pais: formData.pais,
      correo: formData.correo,
      codigo: formData.codigo,
      telefono: formData.telefono,
      consultoraBelcorp: formData.consultora,
      nivelEstudios: formData.estudios,
    };

    try {
      console.log('POST URL:', SCRIPT_URL);
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      console.log('STATUS:', res.status);
      const text = await res.text();
      console.log('RAW RESPONSE:', text);

      const data = JSON.parse(text);

      if (!data.ok) {
        throw new Error(data.message || "Error al guardar");
      }

      alert("Formulario enviado con éxito ✅");
      setFormData({
        nombre: '',
        correo: '',
        pais: '',
        codigo: '',
        telefono: '',
        consultora: '',
        estudios: ''
      });
    } catch (error) {
      console.error("Error en submit:", error);
      alert(String(error?.message || error));
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowButton(y > 440);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: '96px' }} />
      <Navbar scrolled={scrolled} showButton={showButton} setShowDatosModal={setShowDatosModal} />

      <div style={{ padding: '80px 20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Urbanist, sans-serif' }}>
        <h1 style={{ color: '#5D35B0', marginBottom: '24px' }}>Formulario de Preinscripción</h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input name="nombre" type="text" placeholder="Nombre*" required style={inputStyle} value={formData.nombre} onChange={handleInputChange} />

          <select name="pais" required style={selectStyle} value={formData.pais} onChange={handleInputChange}>
            <option value="">Elige un país</option>
            {Object.keys(countryCodes).map((pais) => (
              <option key={pais} value={pais}>{pais}</option>
            ))}
          </select>

          <input name="correo" type="email" placeholder="Correo*" required style={inputStyle} value={formData.correo} onChange={handleInputChange} />

          <div style={{ display: 'flex', gap: '12px' }}>
            <input value={formData.codigo} disabled style={{ ...inputStyle, backgroundColor: '#F5EFFB', width: '100px', color: '#8a4fc1' }} />
            <input name="telefono" type="tel" placeholder="Teléfono*" required style={{ ...inputStyle, flex: 1 }} value={formData.telefono} onChange={handleInputChange} />
          </div>

          <select name="consultora" required style={selectStyle} value={formData.consultora} onChange={handleInputChange}>
            <option value="">¿Eres consultora Belcorp?</option>
            <option>Sí</option>
            <option>No</option>
          </select>

          <select name="estudios" required style={selectStyle} value={formData.estudios} onChange={handleInputChange}>
            <option value="">Nivel de estudios</option>
            <option>Primaria</option>
            <option>Secundaria</option>
            <option>Universitaria</option>
            <option>Postgrado</option>
          </select>

          <button type="submit"
            style={{
              backgroundColor: '#A03BD8',
              color: 'white',
              padding: '12px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Enviar
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
