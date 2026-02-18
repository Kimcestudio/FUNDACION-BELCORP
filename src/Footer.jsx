import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoFB from './assets/logos-fb/fb-blanco.png';
import iconFB from './assets/rrss/fb.svg';
import iconIG from './assets/rrss/ig.svg';
import iconTT from './assets/rrss/tt.svg';
import iconLIN from './assets/rrss/lin.svg';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollOrNavigate = (id) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#5D35B0',
      color: 'white',
      padding: '60px 20px',
      fontFamily: 'Urbanist, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* Logo */}
        <div style={{ flex: '1', minWidth: '200px', display: 'flex', justifyContent: 'center' }}>
          <img src={logoFB} alt="Fundación Belcorp" style={{ height: '200px', marginLeft: '10px' }} />
        </div>

        {/* Redes + Correo + WhatsApp */}
        <div style={{
          flex: '1',
          minWidth: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '20px' }}>
  <a href="https://www.facebook.com/fundacionbelcorpoficial" target="_blank" rel="noopener noreferrer">
    <img src={iconFB} alt="Facebook" style={{ width: '20px', filter: 'brightness(0) invert(1)' }} />
  </a>
  <a href="https://www.instagram.com/fundacionbelcorpoficial/" target="_blank" rel="noopener noreferrer">
    <img src={iconIG} alt="Instagram" style={{ width: '35px', filter: 'brightness(0) invert(1)' }} />
  </a>
  <a href="https://www.tiktok.com/@fundacionbelcorp" target="_blank" rel="noopener noreferrer">
    <img src={iconTT} alt="TikTok" style={{ width: '30px', filter: 'brightness(0) invert(1)' }} />
  </a>
  <a href="https://www.linkedin.com/company/fundacion-belcorp" target="_blank" rel="noopener noreferrer">
    <img src={iconLIN} alt="LinkedIn" style={{ width: '32px', filter: 'brightness(0) invert(1)' }} />
  </a>
</div>
          <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>
            fundacionbelcorp@belcorp.biz
          </div>
          <select style={{
            backgroundColor: '#E057D2',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px 16px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '1rem'
          }}>
            <option value="+51">🇵🇪 +51 956794068</option>
            <option value="+56">🇨🇱 +51 956794068</option>
            <option value="+593">🇪🇨 +593 99 354 4885</option>
            <option value="+52">🇲🇽 +52 55 1002 1270</option>
            <option value="+57">🇨🇴 +57 316 4541897</option>
            <option value="+591">🇧🇴 +593 99 354 4885</option>
            <option value="+1">🇩🇴 +52 55 1002 1270</option>
          </select>
        </div>

        {/* Menú */}
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '20px' }}>MENÚ</h4>
          <ul style={{
  listStyle: 'none',
  padding: 0,
  margin: 0,
  lineHeight: '2',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  fontFamily: 'Urbanist, sans-serif'
}}>
  <li>
    <button
      onClick={() => scrollOrNavigate('programa')}
      style={{
        color: 'white',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        textDecoration: 'none'
      }}
    >
      PROGRAMA
    </button>
  </li>
  <li>
    <button
      onClick={() => scrollOrNavigate('testimonios')}
      style={{
        color: 'white',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        textDecoration: 'none'
      }}
    >
      TESTIMONIOS
    </button>
  </li>
  <li>
    <Link to="/preguntas-frecuentes" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
      PREGUNTAS FRECUENTES
    </Link>
  </li>
  <li>
    <Link to="/contacto" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
      CONTÁCTANOS
    </Link>
  </li>
  <li>
    <a
      href="https://drive.google.com/file/d/1tlI2-zUxBnxvjasm6Rf2gn1idFrZ8oQU/view?usp=sharing" // ← REEMPLAZA ESTA URL por la real
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontFamily: 'inherit',
        fontSize: 'inherit'
      }}
    >
      TÉRMINOS Y CONDICIONES
    </a>
  </li>
  <li>
    <a
      href="https://drive.google.com/file/d/1wDVDnXehDwgBkPa3bEs_6e6l532csdt2/view" // ← REEMPLAZA ESTA URL por la real
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontFamily: 'inherit',
        fontSize: 'inherit'
      }}
    >
      AUTORIZACIÓN DE USO DE DATOS
    </a>
  </li>
</ul>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
