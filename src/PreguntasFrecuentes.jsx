import React, { useEffect, useState } from 'react';
import Navbar from './nav-bar';
import Footer from './Footer';
import FAQGroup from './FAQGroup';
import { HiChevronDown } from 'react-icons/hi';

import emp1 from './assets/preguntas-frecuentes/empco.jpg';
import emp2 from './assets/preguntas-frecuentes/netmsl.jpg';
import emp3 from './assets/preguntas-frecuentes/HANDS.jpg';

const tarjetasPrincipales = [
  {
    image: emp1,
    title: '¿Cómo se desarrolla el programa?',
    text: 'El programa es virtual y se lleva a cabo a través de sesiones por videollamada, en el horario que seleccionaste al momento de inscribirte. Además, se ofrecerán algunas actividades complementarias presenciales cuya asistencia será opcional.'
  },
  {
  image: emp2,
  title: '¿Cómo postulo al programa?',
  text: (
    <>
      Debes completar el formulario de postulación (
      <strong>
        <a href="https://www.tfaforms.com/5120874" target="_blank" rel="noopener noreferrer" style={{ color: '#5D35B0', textDecoration: 'none' }}>
          haz clic aquí
        </a>
      </strong>
      ). Si cumples con los requisitos, podrás elegir tu horario dentro del mismo formulario y, al enviarlo, quedarás inscrita. Para confirmar tu admisión, deberás{' '}
      <span style={{ fontWeight: 600 }}>reconfirmar el mensaje de WhatsApp</span> que te llegará al número de celular con el que postulaste.
    </>
  )
},
  {
    image: emp3,
    title: '¿Quiénes pueden participar de MSL?',
    text: 'Pueden postular al programa todas las mujeres emprendedoras que vivan en Perú, Chile, Ecuador, Colombia, Bolivia, México y República Dominicana, y que cumplan con los criterios establecidos en los Términos y Condiciones vigentes'
  }
];

const categorias = [
  {
    icono: '🧠',
    title: 'Sobre el Programa',
    description: 'Todo lo que necesitas saber sobre el contenido, duración y universidades aliadas del programa.',
    questions: [
      {
        pregunta: '¿Qué lograrás con el programa?',
        respuesta: 'Más confianza en ti misma. Aprenderás a utilizar herramientas digitales. Aplicarás buenas prácticas de gestión para tu negocio. Conectarás con emprendedoras y organizaciones de Latinoamérica. Recibirás un certificado de una universidad de prestigio.'
      },
      {
        pregunta: '¿Cómo se desarrolla el programa?',
        respuesta: 'Es virtual, con sesiones por videollamada. Habrá actividades presenciales opcionales.'
      },
      {
        pregunta: '¿Cuánto dura el programa?',
        respuesta: 'Tiene una duración de 9 a 11 semanas, con clases de 3 horas semanales.'
      },
      {
        pregunta: '¿Cuál es la universidad que desarrolla el programa en mi país?',
        respuesta:'El programa es financiado por Fundación Belcorp y codiseñado y operado por las siguientes universidades de prestigio:\n\nTecnológico de Monterrey: Perú, Ecuador, Colombia y México.\n\nUniversidad Andrés Bello: Chile.\n\nPontificia Universidad Católica Madre y Maestra: República Dominicana.\n\nUniversidad Privada Boliviana: Bolivia.'
      }
    ]
  },
  {
    icono: '✍️',
    title: 'Postulación al Programa',
    description: 'Información clave sobre cómo postular de forma efectiva al programa.',
    questions: [
      {
  pregunta: '¿Cómo postulo al programa?',
  respuesta: (
    <>
      Debes completar el formulario de postulación (
      <a
        href="https://www.tfaforms.com/5120874"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: 700, color: '#5D35B0', textDecoration: 'none' }}
      >
        haz clic aquí
      </a>
      ). Si cumples con los requisitos, podrás elegir tu horario dentro del mismo formulario y, al enviarlo, quedarás inscrita. Para confirmar tu admisión, deberás{' '}
      <span style={{ fontWeight: 700 }}>
        reconfirmar el mensaje de WhatsApp
      </span>{' '}
      que te llegará al número de celular con el que postulaste.
    </>
  )
},

      {
        pregunta: '¿Cuáles son las fechas de convocatoria e inicio de clases?',
        respuesta: 'Las fechas de inicio de la convocatoria se anunciarán a través de nuestras redes oficiales: Instagram, Facebook, LinkedIn y TikTok. El inicio de clases será informado con anticipación por la universidad operadora y también será confirmado al momento de tu reconfirmación vía WhatsApp.'
      },
      {
  pregunta: '¿Cuál es el perfil de las mujeres seleccionadas?',
  respuesta: 'Las mujeres seleccionadas deben cumplir con el siguiente perfil:\n\n•  Ser mayores de 18 años.\n•  Tener un negocio propio o liderar el negocio familiar, con entre 1 y 5 años de funcionamiento. En el caso de consultoras, se considera cumplido este requisito si ya superaron el periodo de nuevas.\n•  Haber finalizado la escuela secundaria o educación básica.\n•  Contar con disponibilidad de tiempo y acceso a una conexión a internet.\n•  No haber recibido un certificado de Mujeres sin Límites en ediciones anteriores.\n•  ¡Tener muchas ganas de crecer y aprender!'
}

    ]
  },
  {
    icono: '⏳',
    title: 'Lista de Espera',
    description: 'Es un sistema que hemos activado para que las participantes interesadas en el programa que no pudieron conseguir una vacante, puedan ser avisadas oportunamente en caso haya disponibilidad de una vacante adicional.',
    questions: [
      {
        pregunta: '¿Cómo me puedo inscribir en la lista de espera?',
        respuesta: 'En los países donde ya no tengamos vacantes disponibles, lo notificaremos oportunamente. Además, compartiremos el mecanismo para inscribirse en la lista de espera a través de nuestras redes sociales oficiales.'
      },
      {
        pregunta: '¿Cuándo me informarán si se desocupa una vacante?',
        respuesta: 'Te notificaremos en orden de inscripción, apenas haya una vacante.'
      },
      {
        pregunta: '¿Tengo que cumplir con los mismos requisitos para estar en la lista de espera?',
        respuesta: 'Sí, los requisitos son los mismos que para postular al programa.'
      },
      {
        pregunta: '¿Qué sucede si se desocupa una vacante y no respondo el mensaje en el periodo indicado?',
        respuesta: 'Tendrás 24 horas para confirmar. Si no respondes, la vacante se asignará a otra persona. Tu nombre seguirá en lista para futuras oportunidades.'
      },
      {
        pregunta: '¿Qué puedo hacer mientras espero una vacante?',
        respuesta: 'Sigue nuestras redes sociales y participa en otras actividades de Fundación Belcorp para estar preparada.'
      },
      {
        pregunta: '¿Hay alguna manera de saber mi posición en la lista de espera?',
        respuesta: 'No se ofrece esa información, pero se respeta el orden de inscripción.'
      },
      {
        pregunta: '¿Qué sucede si hay una gran demanda en la lista de espera?',
        respuesta: 'Se evaluará ampliar el programa o generar nuevas oportunidades.'
      }
    ]
  }
];

export default function PreguntasFrecuentes() {
  const [scrolled, setScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [openCategorias, setOpenCategorias] = useState(Array(categorias.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowButton(y > 440);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCategoria = (index) => {
    const updated = [...openCategorias];
    updated[index] = !updated[index];
    setOpenCategorias(updated);
  };

  return (
    <>
      <Navbar scrolled={scrolled} showButton={showButton} />

      <div
        id="preguntas-frecuentes"
        style={{
          backgroundColor: '#6C32B5',
          padding: '24px',
          textAlign: 'center',
          scrollMarginTop: '100px',
          marginTop: '100px'
        }}
      >
        <h1 style={{
          fontFamily: 'Urbanist',
          fontWeight: 900,
          fontSize: '2rem',
          color: 'white',
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          PREGUNTAS FRECUENTES
        </h1>
      </div>

       <div style={{ paddingTop: '60px', fontFamily: 'Urbanist, sans-serif', backgroundColor: '#F4F3F5', minHeight: '100vh', paddingBottom: '50px' }}>
        <section style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>


          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '64px'
          }}>
            {tarjetasPrincipales.map(({ image, title, text }, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  color: '#333',
                  flex: '1 1 300px',
                  maxWidth: '360px',
                  minHeight: 'auto',
                  textAlign: 'center',
                  border: '2px solid #6C32B5'
                }}
              >
                <h2 style={{
                  fontFamily: 'Urbanist',
                  fontWeight: 700,
                  fontSize: '2.1rem',
                  marginBottom: '10px',
                  marginTop: '0px',
                  marginRight: '20px',
                  color: '#5D35B0',
                  textAlign: 'left'
                }}>
                  {title}
                </h2>
                <p style={{
                  fontFamily: 'MuseoSans',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  textAlign: 'justify'
                }}>
                  {text}
                </p>
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginTop: '16px'
                  }}
                />
              </div>
            ))}
          </div>

          {categorias.map((cat, i) => (
            <div
              key={i}
              style={{
                background: i === 0 ? '#CD91E9' : i === 1 ? '#8D57D4' : '#4E329B',
                borderRadius: '24px',
                padding: '40px 24px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '32px',
                maxWidth: '900px',
                width: '100%',
                margin: '0 auto 32px'
              }}
            >
              <h2 style={{
                fontFamily: 'Urbanist',
                fontWeight: 900,
                fontSize: '1.6rem',
                marginBottom: '12px',
                textTransform: 'uppercase'
              }}>
                {cat.title}
              </h2>
              <p style={{
                fontFamily: 'MuseoSans',
                fontSize: '1rem',
                marginBottom: '24px'
              }}>
                {cat.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => toggleCategoria(i)}
                  style={{
                    backgroundColor: 'white',
                    color: '#6C32B5',
                    fontFamily: 'Urbanist',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '10px 24px',
                    border: 'none',
                    borderRadius: '40px',
                    cursor: 'pointer',
                    marginBottom: openCategorias[i] ? '24px' : '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    justifyContent: 'center'
                  }}
                >
                  {openCategorias[i] ? 'Ocultar preguntas' : 'Mostrar preguntas'}
                  <HiChevronDown
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: openCategorias[i] ? 'rotate(180deg)' : 'rotate(0deg)',
                      fontSize: '1.25rem',
                      color: '#6C32B5'
                    }}
                  />
                </button>
              </div>
              {openCategorias[i] && (
                <div style={{ marginTop: '32px' }}>
                  <FAQGroup icono={cat.icono} title="" description="" questions={cat.questions} />
                </div>
              )}
            </div>
          ))}

           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button
              style={{
                backgroundColor: '#CD4AD1',
                color: 'white',
                fontFamily: 'Urbanist',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '14px 32px',
                border: 'none',
                borderRadius: '40px',
                cursor: 'pointer',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => window.location.href = '/contacto'}
            >
              <span style={{ fontWeight: 400 }}>¿No encontraste la respuesta? </span>
              <span style={{ fontWeight: 900 }}>Contáctanos</span>
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}