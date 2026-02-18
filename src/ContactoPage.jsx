// src/ContactoPage.jsx
import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './nav-bar';
import FBIcon from './assets/rrss/fb.svg?react';
import IGIcon from './assets/rrss/ig.svg?react';
import TTIcon from './assets/rrss/tt.svg?react';
import LINIcon from './assets/rrss/lin.svg?react';

import MapaSVG from './assets/mapa/MAPA.svg?react';


function ContactoPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [formData, setFormData] = useState({});

  const countryCodes = {
    'Bolivia': '+591',
    'Perú': '+51',
    'Colombia': '+57',
    'Ecuador': '+593',
    'Chile': '+56',
    'México': '+52',
    'República Dominicana': '+1'
  };

  const phonePrefix = selectedCountry && countryCodes[selectedCountry] ? countryCodes[selectedCountry] : '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <Navbar />

      <section style={{ backgroundColor: '#FFFFFF', color: '#5d35b0', padding: '80px 20px', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '900', color: '#CD4AD1' }}>CONTACTO</h1>

        {/* Redes y correo */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '40px', flexWrap: 'wrap' }}>
          {/* Redes Sociales */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>REDES SOCIALES</h3>
            <div style={iconContainer}>
              <a href="https://www.facebook.com/fundacionbelcorpoficial" target="_blank" rel="noopener noreferrer">
                <FBIcon style={getIconStyle('24px')} />
              </a>
              <a href="https://www.instagram.com/fundacionbelcorpoficial/" target="_blank" rel="noopener noreferrer">
                <IGIcon style={getIconStyle('30px')} />
              </a>
              <a href="https://www.tiktok.com/@fundacionbelcorp" target="_blank" rel="noopener noreferrer">
                <TTIcon style={getIconStyle('26px')} />
              </a>
              <a href="https://www.linkedin.com/company/fundacion-belcorp/" target="_blank" rel="noopener noreferrer">
                <LINIcon style={getIconStyle('28px')} />
              </a>
            </div>
          </div>

          {/* Escríbenos Aquí */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>ESCRÍBENOS AQUÍ</h3>
            <div
              style={{
                ...iconContainer,
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <a
                href="mailto:fundacionbelcorp@belcorp.biz"
                style={{
                  color: '#5d35b0',
                  fontSize: '1.4rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 'bold'
                }}
              >
                <span role="img" aria-label="email">📩</span>
                fundacionbelcorp@belcorp.biz
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center', marginTop: '60px' }}>
          {/* Presencia Global */}
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>NUESTRA PRESENCIA GLOBAL</h2>
           <p style={{ fontSize: '1rem', marginTop: '1px', marginBottom: '0px' }}>
  Estamos presentes en México, República Dominicana, Colombia, Ecuador, Perú, Bolivia y Chile.
</p>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <MapaSVG style={{ width: '90%', maxWidth: '800px', height: 'auto' }} />
</div>

          </div>

          {/* Formulario */}
          <div style={{ flex: '1', minWidth: '320px', maxWidth: '600px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ textAlign: 'center', fontWeight: '800', fontSize: '1.6rem', marginBottom: '20px', color: '#5d35b0' }}>ENVÍANOS UN MENSAJE</h2>
<p style={{ fontSize: '1rem', marginTop: '1px', marginBottom: '20px' }}>
  Estamos presentes en México, República Dominicana, Colombia, Ecuador, Perú, Bolivia y Chile.
</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '14px' }}>
                <input name="nombre" placeholder="Nombre*" onChange={handleChange} style={inputStyle} />
                <input name="apellido" placeholder="Apellido*" onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <input name="email" type="email" placeholder="Correo Electrónico*" onChange={handleChange} style={inputStyle} />
                <select name="perfil" onChange={handleChange} style={inputStyle} defaultValue="">
                  <option value="" disabled>Perfil*</option>
                  <option value="emprendedora">Emprendedora</option>
                  <option value="organización">Organización</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <select name="pais" onChange={(e) => { handleChange(e); setSelectedCountry(e.target.value); }} style={inputStyle} defaultValue="">
                  <option value="" disabled>País*</option>
                  {[
                    'Perú',
                    'Colombia',
                    'México',
                    'Ecuador',
                    'Chile',
                    'República Dominicana',
                    'Bolivia'
                  ].map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                <input name="ciudad" placeholder="Ciudad*" onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <span style={{ alignSelf: 'center', color: '#CD4AD1', fontWeight: 'bold' }}>{phonePrefix}</span>
                <input name="telefono" placeholder="Teléfono*" onChange={handleChange} style={inputStyle} />
              </div>
              <textarea name="mensaje" placeholder="Mensaje*" onChange={handleChange} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
              <button type="submit" style={buttonStyle}>Enviar</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#F3EFF7',
  border: '2px solid #CD4AD1',
  padding: '20px 30px',
  borderRadius: '20px',
  textAlign: 'center',
  minWidth: '220px',
  transition: 'background-color 0.3s ease'
};

const cardTitle = {
  fontWeight: 'bold',
  marginBottom: '16px',
  textTransform: 'uppercase',
  fontSize: '1rem',
  color: '#5d35b0'
};

const iconContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '14px',
  padding: '10px 20px',
  border: '2px solid #CD4AD1',
  borderRadius: '999px',
  backgroundColor: 'white'
};

const getIconStyle = (width) => ({
  width: width,
  height: width,
  transition: 'transform 0.3s ease',
  fill: '#5d35b0'
});

const inputStyle = {
  flex: 1,
  padding: '12px 16px',
  fontSize: '1rem',
  borderRadius: '16px',
  border: '2px solid #CD4AD1',
  fontFamily: 'Urbanist, sans-serif',
  color: '#5d35b0'
};

const buttonStyle = {
  alignSelf: 'center',
  marginTop: '20px',
  padding: '12px 40px',
  backgroundColor: '#CD4AD1',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '12px',
  fontSize: '1rem',
  cursor: 'pointer'
};

export default ContactoPage;