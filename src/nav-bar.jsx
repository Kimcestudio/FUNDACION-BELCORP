import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import logoMSL from './assets/logo msl/logo msl.png';


export default function Navbar({ scrolled, showButton, setShowDatosModal }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    if (sectionId === 'faq') {
  navigate('/preguntas-frecuentes');
  return;
}

if (sectionId === 'programa') {
  navigate('/programa');
  return;
}


    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? '#ffffff' : '#F8F4FC',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 6px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.05)',
        padding: scrolled ? '16px 40px' : '32px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1rem',
        fontFamily: 'Urbanist, sans-serif',
      }}
    >
      <div
  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
  onClick={() => navigate('/')}
>
  <img
    src={logoMSL}
    alt="Logo Mujeres Sin Límites"
    style={{ height: '40px', objectFit: 'contain' }} // Ajusta tamaño si necesitas
  />
</div>


      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexGrow: 1,
          gap: '24px',
        }}
      >
        <motion.ul
          style={{
            display: 'flex',
            gap: '28px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}
          animate={{ paddingRight: showButton ? '220px' : '0px' }}
          transition={{ duration: 0.3 }}
        >
          {[
            { name: 'Inicio', id: 'hero' },
            { name: 'Programa', id: 'programa' },
            { name: 'Testimonios', id: 'testimonios' },
            { name: 'Preguntas Frecuentes', id: 'faq' },
          ].map(({ name, id }) => (
            <li
              key={name}
              onClick={() => handleNavigation(id)}
              style={{
                color: '#CD4AD1',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '0.5px',
              }}
            >
              {name}
            </li>
          ))}
        </motion.ul>

        {showButton && (
          <motion.button
            onClick={() => navigate('/#modal')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              right: '40px',
              backgroundColor: '#CD4AD1',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            DÉJANOS TUS DATOS
          </motion.button>
        )}
      </motion.div>
    </nav>
  );
}
