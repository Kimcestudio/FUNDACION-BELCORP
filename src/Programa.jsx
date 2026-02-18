import React from 'react';
import Navbar from './nav-bar';
import Footer from './Footer';
import './Programa.css';
import './fonts.css';

import img1 from './assets/portadainicio/portpe.jpg';
import img2 from './assets/portadainicio/portec_1.97.1.png';
import img3 from './assets/portadainicio/portec2_1.98.1.png';
import img4 from './assets/portadainicio/port pe_1.99.1.png'; // con espacio, sin problema

export default function Programa() {
  return (
    <>
      <Navbar />

      {/* Encabezado */}
      <section className="programa-header">
        <h1>Programa</h1>
      </section>

      {/* Sección de introducción */}
      <section className="programa-section">
        <div className="programa-container">
          {/* Imagen a la izquierda con fondo decorativo */}
          <div className="programa-imagen-container">
            <div className="programa-fondo"></div>
            <img
              src={img1}
              alt="Participante del programa"
              className="programa-imagen"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="programa-texto">
            <h2>¿Qué es Mujeres Sin Límites?</h2>
            <p>
              <strong>
                Es un programa de Fundación Belcorp dirigido a mujeres emprendedoras.
              </strong>
            </p>
            <p>
              Mujeres Sin Límites tiene como objetivo impulsar el crecimiento sólido y rentable de los negocios de las mujeres, mediante el fortalecimiento de su liderazgo y capacidades emprendedoras.
            </p>
            <p>
              <strong>Es un programa totalmente gratuito</strong> operado y certificado por universidades de alto prestigio en la región.
            </p>
          </div>
        </div>
      </section>
{/* Sección de características con imagen a la derecha */}
<section className="caracteristicas-section">
  <div className="caracteristicas-container">
    
    {/* Texto a la izquierda */}
    <div className="caracteristicas-texto">
      <h2 className="caracteristicas-titulo">Características</h2>
      <ul className="caracteristicas-lista">
        <li>Programa totalmente gratuito</li>
        <li>Desarrollado de manera virtual con instancias presenciales opcionales.</li>
        <li>Operado y certificado por universidades de alto prestigio de la región.</li>
        <li>Las sesiones de clase y asesoría siguen una metodología sincrónica.</li>
        <li>El programa consta de 2 fases: Fase Fundamental y Fase de Consolidación.</li>
      </ul>
    </div>

    {/* Imagen a la derecha */}
    <div className="caracteristicas-imagen-container">
      <img
        src={img2}
        alt="Participante"
        className="caracteristicas-imagen"
      />
    </div>

  </div>
</section>

{/* Sección de requisitos con imagen a la izquierda */}
<section className="requisitos-section">
  <div className="requisitos-container">
    
    {/* Imagen a la izquierda */}
    <div className="requisitos-imagen-container">
      <img
        src={img3}
        alt="Mujer participando"
        className="requisitos-imagen"
      />
    </div>

    {/* Texto a la derecha */}
    <div className="requisitos-texto">
      <h2 className="requisitos-titulo">Requisitos para postular</h2>
      <ul className="requisitos-lista">
        <li>Mujeres mayores de 18 años.</li>
        <li>Tener un negocio propio o liderar el negocio familiar, con entre 1 y 5
años de funcionamiento.
En el caso de consultoras, se considera
cumplido este requisito si ya superaron el periodo de nuevas.</li>
        <li>Haber finalizado la escuela secundaria o educación básica.</li>
        <li>Contar con disponibilidad de tiempo y acceso a una conexión a internet.</li>
        <li>No haber recibido un certificado de Mujeres sin Límites en ediciones
anteriores.</li>
<li>¡Tener muchas ganas de crecer y aprender!</li>
      </ul>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}
