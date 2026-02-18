// src/LandingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// TODO: pega todo tu código actual aquí
import fondoInicio from './assets/inicio-fondo.png';

import port1 from './assets/portadainicio/port pe_1.99.1.png';
import port2 from './assets/portadainicio/portec_1.97.1.png';
import port3 from './assets/portadainicio/portec2_1.98.1.png';
import port4 from './assets/portadainicio/portpe.jpg';
import './fonts.css';
import CountUp from 'react-countup';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard.jsx';

//Componentes
import Footer from './Footer.jsx';
import Navbar from './nav-bar.jsx';

import { Link } from 'react-router-dom';




// Logos certificados
import logoPucmm from './assets/certificate-con/pucmm-new.png';
import logoTec from './assets/certificate-con/TecnologicoMonterrey.png';
import logoAndresBello from './assets/certificate-con/AndresBelloUniversity.png';
import logoUpb from './assets/certificate-con/UPB.png';

// Testimonio
import videoGabriela from './assets/testimonio1/gabriela.mp4';
import fotoGabriela from './assets/testimonio1/gabriela morocho.png';

import videoIvette from './assets/testimonioi/ivette-leon.mp4';
import fotoIvette from './assets/testimonioi/ivette.png';

import videoSonia from './assets/testimonios/sonia.mp4';
import fotoSonia from './assets/testimonios/sonia.png';

import videoArleth from './assets/testimoniope/arlethcusma.mp4';
import fotoArleth from './assets/testimoniope/arleth.jpg';

import videoKatherine from './assets/TestimonioCo/KatherineCo.mp4';
import fotoKatherine from './assets/TestimonioCo/katherine.png';

import videoFlor from './assets/testimoniof/flor-de-maria.mp4';
import fotoFlor from './assets/testimoniof/flordemaria.png';

import ReactPlayer from 'react-player';
import thumbnail from './assets/testimonio1/gabriela morocho.png';
import videoSrc from './assets/testimonio1/gabriela.mp4';
import { FaPlay } from 'react-icons/fa';




function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDatosModal, setShowDatosModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [port2, port3, port4];
  const videoRef = useRef(null);
  const navigate = useNavigate();
const [prevImage, setPrevImage] = useState(0);
const [imageLoaded, setImageLoaded] = useState(false);
const [imageReady, setImageReady] = useState(false);

const location = useLocation();




  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 300);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowButton(y > 440);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  if (location.hash === '#modal') {
    setShowDatosModal(true);
  }
}, [location]);

  useEffect(() => {
  const interval = setInterval(() => {
    const next = (currentImage + 1) % heroImages.length;

    const img = new Image();
    img.src = heroImages[next];
    img.onload = () => {
      setCurrentImage(next);
      setImageReady(true);
    };

    setImageReady(false);
  }, 7000);

  return () => clearInterval(interval);
}, [currentImage]);



  return (
    <>
      <div style={{ height: scrolled ? '72px' : '96px' }} />
      <div style={{ fontFamily: 'Urbanist, sans-serif', position: 'relative' }}>
        <Navbar scrolled={scrolled} showButton={showButton} setShowDatosModal={setShowDatosModal} />
<section style={{ position: 'relative', minHeight: '440px', overflow: 'hidden' }}>
  {/* Imagen de fondo animada */}
<motion.img
  key={currentImage}
  src={heroImages[currentImage]}
  initial={{ opacity: 0, scale: 1.02 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 2 }}
  alt=""
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    zIndex: -2
  }}
/>

{/* Degradado encima de la imagen */}
<div style={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to right, rgba(93, 53, 176, 0.5), rgba(93, 53, 176, 0.5))',
  zIndex: -1
}} />


  <div
    style={{
      padding: '100px 80px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      minHeight: '440px',
      position: 'relative'
    }}
  >
    <h1 style={{
      fontSize: '3.5rem',
      fontWeight: '900',
      marginBottom: '-20px',
      lineHeight: 1.1,
      textTransform: 'uppercase'
    }}>
      ÚNETE A NOSOTRAS
    </h1>
    <p style={{ fontSize: '1.6rem', fontWeight: '300', marginBottom: '14px' }}>
      Pronto Mujeres Sin Límites 2026
    </p>
    <motion.button
      onClick={() => setShowDatosModal(true)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: '#CD4AD1',
        color: 'white',
        border: 'none',
        padding: '16px 36px',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        borderRadius: '10px',
        cursor: 'pointer'
      }}
    >
      PREINSCRÍBETE AQUÍ
    </motion.button>
  </div>
</section>




        {/* BANDA INFERIOR HERO */}
        <div
          style={{
            backgroundColor: '#5D35B0',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '28px 16px',
            fontSize: '1.4rem', // Aumentado desde 1.1rem → puedes ajustar a gusto
    lineHeight: '1.4',   // Mejora la legibilidad
    letterSpacing: '0.5px' // Opcional: da un toque más limpio
          }}
        >
          MÁS DE 12 MIL MUJERES CAPACITADAS
        </div>

        {/* SECCIÓN: NUESTRO PROGRAMA */}
<section
  id="programa"
  style={{
    backgroundColor: '#F3EFF7',
    padding: '80px 48px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px'
  }}
>
  {/* Izquierda: Texto */}
  <div style={{
    flex: '1',
    minWidth: '300px',
    marginLeft: '160px' // 👈 Margen para centrar un poco más
  }}>
    <h2
      style={{
        fontFamily: 'Urbanist',
        fontWeight: 900,
        fontSize: '3.2rem', // 👈 Título más grande (ajustable)
        color: '#6C32B5',
        lineHeight: '1.1',
        marginBottom: '20px'
      }}
    >
      NUESTRO<br />PROGRAMA
    </h2>

    <div
      style={{
        fontFamily: 'Urbanist',
        fontWeight: 800,
        fontSize: '1.2rem', // 👈 Ajustado
        backgroundColor: '#CD4AD1',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '6px',
        display: 'inline-block',
        marginBottom: '4px'
      }}
    >
      100% GRATUITO Y VIRTUAL
    </div>

    <p
      style={{
        fontFamily: 'MuseoSans',
        fontWeight: 500,
        fontSize: '1.4rem', // 👈 Texto más grande (modificable)
        color: '#333',
        maxWidth: '400px',
        marginTop: '24px'
      }}
    >
      Diseñado para impulsar el crecimiento <span style={{ color: '#CD4AD1', fontWeight: 700 }}>sólido y rentable del negocio</span> de mujeres emprendedoras.
    </p>

   <button
  onClick={() => window.location.href = '/programa'}
  style={{
    marginTop: '32px',
    border: '2px solid #CD4AD1',
    borderRadius: '30px',
    padding: '14px 28px',
    backgroundColor: 'white',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer'
  }}
>
  CONOCE MÁS <span style={{ fontSize: '1.4rem' }}>➔</span>
</button>

  </div>

          {/* Derecha: Video */}
<div
  style={{
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    paddingRight: '40px',
    marginRight: '10px' // 👈 Margen izquierdo agregado para centrar el video mejor
  }}
>
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/YZGpe2dIEkA"
    title="Presentación Mujeres Sin Límites"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
      borderRadius: '12px',
      maxWidth: '520px'
    }}
  ></iframe>
</div>

        </section>

        {/* 🟣 SECCIÓN: ESTADÍSTICAS */}
        <section
          style={{
            backgroundColor: '#5D35B0',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '80px',
            padding: '48px 20px',
            flexWrap: 'wrap',
            textAlign: 'center',
            fontFamily: 'Urbanist, sans-serif'
          }}
        >
          {/* Bloque 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '8px' }}>+ <CountUp end={12000} duration={2.5} /></div>
            <div style={{ fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase' }}>
              EMPRENDEDORAS CAPACITADAS
            </div>
          </motion.div>

          {/* Bloque 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '8px' }}><CountUp end={7} duration={2} /></div>
            <div style={{ fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase' }}>
              PAÍSES IMPACTADOS
            </div>
          </motion.div>

          {/* Bloque 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '8px' }}><CountUp end={94} duration={2} />%</div>
            <div style={{ fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase' }}>
              ESTÁ SATISFECHA CON EL PROGRAMA
            </div>
          </motion.div>
        </section>
      </div>
     {/* 🟣 SECTION: CERTIFICATE CAROUSEL */}
<section style={{
  backgroundColor: '#F3EFF7',
  padding: '30px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}}>
  <h2 style={{
    fontFamily: 'Urbanist, sans-serif',
    color: '#CD4AD1',
    fontWeight: 800,
    fontSize: '1.6rem',
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    textAlign: 'center'
  }}>
    CERTIFÍCATE CON:
  </h2>

  <div style={{
    overflow: 'hidden',
    width: '100%',
    maxWidth: '1100px',
    padding: '0 20px',
    boxSizing: 'border-box'
  }}>
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      style={{
        display: 'flex',
        gap: '48px',
        width: 'max-content'
      }}
    >
      {[logoUpb, logoPucmm, logoTec, logoAndresBello, logoUpb, logoPucmm, logoTec, logoAndresBello].map((logo, idx) => (
        <motion.img
          key={idx}
          src={logo}
          alt={`Logo ${idx}`}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          style={{ height: '60px', objectFit: 'contain' }}
        />
      ))}
    </motion.div>
  </div>
</section>
{/* 🟣 SECCIÓN: TESTIMONIOS */}
<section
  id="testimonios"
  style={{
    fontFamily: 'Urbanist, sans-serif',
    backgroundColor: '#F4F3F5',
    padding: '80px 32px',
    textAlign: 'center'
  }}
>
  <div style={{
    marginBottom: '12px',
    fontSize: '1.4rem',
    color: '#6C32B5',
    fontWeight: 600
  }}>
    NUESTRAS PROTAGONISTAS
  </div>

  <h2 style={{
    fontFamily: 'MuseoSans, sans-serif',
    color: '#CD4AD1',
    fontWeight: 900,
    fontSize: '2.9rem',
    marginBottom: '40px',
    textTransform: 'uppercase'
  }}>
    HISTORIAS QUE INSPIRAN
  </h2>

  <div style={{
    display: 'flex',
    gap: '32px',
    justifyContent: 'center',
    flexWrap: 'wrap'  // 👈 importante para responsive
  }}>
    <TestimonialCard
      thumbnail={fotoGabriela}
      videoSrc={videoGabriela}
      name="Gabriela Morocho"
      quote="Gracias a Mujeres Sin Límites logré ordenar mi negocio."
    />
    <TestimonialCard
      thumbnail={fotoArleth}
      videoSrc={videoArleth}
      name="Arleth Cusma"
      quote="Mi negocio mejoró y pude darle la vida que mi hija se merece"
    />
    <TestimonialCard
      thumbnail={fotoSonia}
      videoSrc={videoSonia}
      name="Sonia"
      quote="Logré formalizar mi emprendimiento gracias al programa."
    />
    <TestimonialCard
      thumbnail={fotoKatherine}
      videoSrc={videoKatherine}
      name="Katherine"
      quote="MSL me ayudó a cree en mi como mujer emprendedora y mejoró la efectividad de mi negocio "
    />
  </div>
</section>

        {/* MODAL VIDEO */}
      {showDatosModal && (
  <div
    onClick={() => setShowDatosModal(false)}
    style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.7)',
      zIndex: 3000,
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '40px',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center',
        fontFamily: 'Urbanist, sans-serif'
      }}
    >
      <h3 style={{ margin: 0, color: '#5D35B0', fontSize: '1.9rem' }}>¡ÚNETE A NOSOTRAS!</h3>
      <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: '#333', marginTop: '6px' }}>
        Mujeres Sin Límites 2026
      </p>

      {/* 👇 Mantén solo el botón de preinscripción */}
      <button
        onClick={() => {
          navigate('/preinscripcion');
          setShowDatosModal(false);
        }}
        style={{
          backgroundColor: '#F3EFF7',
          color: '#5D35B0',
          padding: '14px 28px',
          border: '2px solid #CD4AD1',
          borderRadius: '8px',
          marginTop: '8px',
          cursor: 'pointer',
          width: '100%',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        Preinscríbete
      </button>
    </div>
  </div>
)}


      <Footer />
    </>
  );
}

export default LandingPage;
