import React from 'react';
import AcordeonPreguntas from './AcordeonPreguntas';

export default function FAQGroup({ icono, title, description, questions }) {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {questions.map((p, i) => (
          <AcordeonPreguntas key={i} {...p} />
        ))}
      </div>
    </div>
  );
}