import React, { useState } from 'react';

const pillStyle: React.CSSProperties = {
  background: 'rgba(200, 200, 200, 0.85)',
  borderRadius: '999px',
  padding: '8px 18px',
  fontFamily: 'monospace',
  fontSize: '0.95rem',
  color: '#111',
  textDecoration: 'none',
};

const Submit = () => {
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }

    setUploading(false);
  };

  if (submitted) {
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
            We'll review your photo and add it to the collection.
          </p>
          <a href="/" style={{ ...pillStyle }}>Back to the grid</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: 'monospace',
      color: '#111',
      background: '#fff',
      minHeight: '100vh',
      overflowY: 'scroll',
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

      {/* Form content */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '160px 40px 80px 40px',
      }}>
        <h2 style={{ fontWeight: 'normal', fontSize: '1.4rem', marginBottom: '8px' }}>
          Submit a photo
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#333', lineHeight: '1.7', marginBottom: '40px' }}>
          Spotted an informal solution in the wild? We'd love to see it. Submit your photo and it may be added to the collection.
        </p>

        <form
          name="submissions"
          method="POST"
          data-netlify="true"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <input type="hidden" name="form-name" value="submissions" />

          {/* Name */}
          <div>
            <label style={{ fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
              Your name
            </label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: '100%',
                padding: '10px 16px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label style={{ fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
              Your email
            </label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '10px 16px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>

          {/* Description */}
          <div>
            <label style={{ fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
              Describe the informal solution
            </label>
            <textarea
              name="description"
              required
              rows={4}
              style={{
                width: '100%',
                padding: '10px 16px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxSizing: 'border-box',
                resize: 'vertical',
                outline: 'none',
              }}
            />
          </div>

          {/* Photo upload */}
          <div>
            <label style={{ fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
              Your photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              required
              style={{
                width: '100%',
                padding: '10px 16px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={uploading}
            style={{
              background: 'rgba(200, 200, 200, 0.85)',
              borderRadius: '999px',
              padding: '12px 32px',
              fontFamily: 'monospace',
              fontSize: '0.95rem',
              color: '#111',
              border: 'none',
              cursor: uploading ? 'wait' : 'pointer',
              alignSelf: 'flex-start',
            }}
          >
            {uploading ? 'Submitting...' : 'Submit'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Submit;