import React from 'react';

const pillStyle: React.CSSProperties = {
  background: 'rgba(200, 200, 200, 0.85)',
  borderRadius: '999px',
  padding: '8px 18px',
  fontFamily: 'monospace',
  fontSize: '0.95rem',
  color: '#111',
  textDecoration: 'none',
};

export default function ThankYou() {
  return (
    <div style={{
      fontFamily: 'monospace',
      color: '#111',
      background: '#fff',
      minHeight: '100vh',
    }}>

      {/* Header */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        <a href="/" style={{
          background: 'rgba(200, 200, 200, 0.85)',
          borderRadius: '999px',
          padding: '12px 24px',
          fontFamily: 'monospace',
          fontSize: '1.6rem',
          color: '#111',
          textDecoration: 'none',
          display: 'inline-block',
        }}>
          Informal Solutions
        </a>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="/about" style={pillStyle}>About</a>
          <a href="https://www.instagram.com/informal_solutions/" target="_blank" rel="noreferrer" style={pillStyle}>Instagram</a>
          <a href="/submit" style={pillStyle}>Submit</a>
        </div>
      </div>

      {/* Content */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{
            fontWeight: 'normal',
            fontSize: '1.4rem',
            marginBottom: '16px',
          }}>
            Thank you for your submission!
          </h2>
          <p style={{
            fontSize: '0.85rem',
            color: '#333',
            lineHeight: '1.7',
            marginBottom: '40px',
            maxWidth: '400px',
          }}>
            We'll review your photo and may add it to the collection.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <a href="/" style={pillStyle}>Back to the grid</a>
            <a href="/submit" style={pillStyle}>Submit another</a>
          </div>
        </div>
      </div>

    </div>
  );
}