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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontWeight: 'normal', fontSize: '1.4rem', marginBottom: '16px' }}>
          Thank you for your submission!
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#333', marginBottom: '32px' }}>
          We'll review your photo and may add it to the collection.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="/" style={pillStyle}>Back to the grid</a>
          <a href="/submit" style={pillStyle}>Submit another</a>
        </div>
      </div>
    </div>
  );
}