// TestimonialCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';

export default function TestimonialCard({ thumbnail, videoSrc, name, quote }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '300px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <div
          style={{
            position: 'relative',
            height: '500px',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <img
            src={thumbnail}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.5)',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
          />
          <FaPlay color="white" size={28} style={{ zIndex: 2 }} />
        </div>

        <div style={{
  position: 'absolute',
  bottom: 24,
  left: 0,
  width: '90%',
  color: 'white',
  zIndex: 2,
  textAlign: 'center',
  padding: '0 16px'
}}>
          <h3 style={{
            margin: 0,
            fontFamily: 'Urbanist',
            fontWeight: 700,
            fontSize: '1.1rem',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
          }}>
            {name}
          </h3>
          <p style={{
            marginTop: 4,
            fontSize: '0.9rem',
            fontFamily: 'MuseoSans',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
          }}>
            “{quote}”
          </p>
        </div>
      </motion.div>

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000
        }}>
          <div style={{
            position: 'relative',
            backgroundColor: 'black',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '90%',
            maxWidth: '720px'
          }}>
            <ReactPlayer url={videoSrc} playing controls width="100%" />
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: '#fff',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '50%',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >✕</button>
          </div>
        </div>
      )}
    </>
  );
}
