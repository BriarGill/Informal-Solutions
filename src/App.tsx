import { useState } from 'react';
import ThiingsGrid, { type ItemConfig } from '../lib/ThiingsGrid';

const photos = Array.from({ length: 133 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `/Photos/image${num}.jpg`;
});

const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <div
    onClick={onClose}
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      cursor: 'zoom-out',
    }}
  >
    <img
      src={src}
      alt=""
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: '90vw',
        maxHeight: '90vh',
        objectFit: 'contain',
        borderRadius: '8px',
        boxShadow: '0 0 60px rgba(0,0,0,0.8)',
      }}
    />
    <button
      onClick={onClose}
      style={{
        position: 'absolute',
        top: '20px',
        right: '28px',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '2.5rem',
        cursor: 'pointer',
        lineHeight: 1,
      }}
    >
      ×
    </button>
  </div>
);

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const PhotoCell = ({ gridIndex, isMoving }: ItemConfig) => {
    const photo = photos[Math.abs(gridIndex) % photos.length];
    return (
      <div
        onClick={() => { if (!isMoving) setSelectedPhoto(photo); }}
        style={{
          position: 'absolute',
          inset: '4px',
          overflow: 'hidden',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        <img
          src={photo}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ThiingsGrid gridSize={260} renderItem={PhotoCell} />
      {selectedPhoto && (
        <Lightbox src={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        <div style={{
          background: 'rgba(200, 200, 200, 0.85)',
          borderRadius: '999px',
          padding: '12px 24px',
          fontFamily: 'monospace',
          fontSize: '1.6rem',
          color: '#111',
        }}>
          Informal Solutions
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="/about" style={{
            background: 'rgba(200, 200, 200, 0.85)',
            borderRadius: '999px',
            padding: '8px 18px',
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            color: '#111',
            textDecoration: 'none',
          }}>About</a>
          <a href="https://www.instagram.com/informal_solutions/" target="_blank" rel="noreferrer" style={{
            background: 'rgba(200, 200, 200, 0.85)',
            borderRadius: '999px',
            padding: '8px 18px',
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            color: '#111',
            textDecoration: 'none',
          }}>Instagram</a>
          <a href="/submit" style={{
            background: 'rgba(200, 200, 200, 0.85)',
            borderRadius: '999px',
            padding: '8px 18px',
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            color: '#111',
            textDecoration: 'none',
          }}>Submit</a>
        </div>
      </div>
    </div>
  );
}