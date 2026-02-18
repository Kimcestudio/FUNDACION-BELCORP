  import React, { useState } from 'react';
  import { IoChevronDown } from 'react-icons/io5';

  export default function AcordeonPreguntas({ pregunta, respuesta }) {
    const [open, setOpen] = useState(false);

    return (
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: '#eadfec',
          borderRadius: '12px',
          padding: '16px 24px',
          cursor: 'pointer',
          width: '95%',
          margin: '0 0 0 auto',
          transition: 'all 0.3s ease'
        }}
      >
        <h3 style={{
          fontFamily: 'Urbanist',
          fontWeight: 700,
          fontSize: '1.2rem',
          color: '#5D35B0',
          padding: '2px',
          letterSpacing: '-0.1px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          margin: 0
        }}>
          {pregunta}
          <IoChevronDown
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              fontSize: '1.2rem',
              color: '#5D35B0'
            }}
          />
        </h3>
        {open && (
          <div style={{ marginTop: '15px' }}>
            {typeof respuesta === 'string'
    ? respuesta.split('\n').map((linea, i) => (
        <p key={i}
      style={{
        color: '#333',
        fontFamily: 'MuseoSans',
        fontSize: '1rem',
        fontWeight: 500,
        textAlign: 'justify',
        marginBottom: '10px'
      }}
    >
      {linea}</p>
      ))
    : <div style={{ color: '#333', fontFamily: 'MuseoSans', fontSize: '1rem', fontWeight: 500, textAlign: 'justify' }}>
      {respuesta}
    </div>

  }
          </div>
        )}
      </div>
    );
  }
