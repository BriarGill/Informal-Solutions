import React, { useEffect, useState } from 'react';

const pillStyle: React.CSSProperties = {
  background: 'rgba(200, 200, 200, 0.85)',
  borderRadius: '999px',
  padding: '8px 18px',
  fontFamily: 'monospace',
  fontSize: '0.95rem',
  color: '#111',
  textDecoration: 'none',
};

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          padding: isMobile ? '8px 16px' : '12px 24px',
          fontFamily: 'monospace',
          fontSize: isMobile ? '1rem' : '1.6rem',
          color: '#111',
          textDecoration: 'none',
          display: 'inline-block',
        }}>
          Informal Solutions
        </a>
        <div style={{ display: 'flex', gap: '8px' }}>
          <a href="/about" style={{ ...pillStyle, fontSize: isMobile ? '0.75rem' : '0.95rem', padding: isMobile ? '6px 12px' : '8px 18px' }}>About</a>
          <a href="https://www.instagram.com/informal_solutions/" target="_blank" rel="noreferrer" style={{ ...pillStyle, fontSize: isMobile ? '0.75rem' : '0.95rem', padding: isMobile ? '6px 12px' : '8px 18px' }}>Instagram</a>
          <a href="/submit" target="_blank" rel="noreferrer" style={{ ...pillStyle, fontSize: isMobile ? '0.75rem' : '0.95rem', padding: isMobile ? '6px 12px' : '8px 18px' }}>Submit</a>
        </div>
      </div>

      {/* Page content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: isMobile ? '140px 24px 80px 24px' : '160px 40px 80px 40px',
      }}>

        {/* Section 1: What is an Informal Solution */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '24px' : '60px',
          alignItems: 'flex-start',
          marginBottom: isMobile ? '60px' : '120px',
        }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontWeight: 'normal', fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '16px' }}>
              What is an Informal Solution?
            </h2>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: '#333' }}>
              In my view, an informal solution is an improvised hack. A quick, clever fix to a small, tangible problem. It's the kind of everyday ingenuity you stumble across when people use what's at hand in unexpected ways. For example, in one submission, a cake mixer is attached to a hand drill. The mix of a construction tool in the kitchen is both humorous and surprisingly ingenious.
            </p>
          </div>
          <div style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}>
            <img src="/about/drill.JPG" alt="Drill in kitchen" style={{ width: '100%', borderRadius: '4px', display: 'block' }} />
          </div>
        </div>

        {/* Section 2: Where do the photos come from */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontWeight: 'normal', fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '16px' }}>
            Where do the photos come from?
          </h2>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: '#333', maxWidth: isMobile ? '100%' : '560px' }}>
            In the beginning I collected them, walking to uni through Toronto's china town. I created the Instagram account @informal_solutions in 2015. It gained some popularity in small design communities all over the globe. Now most of the images are submitted by friends and strangers on the internet.
          </p>
        </div>

       {/* Three photos — stacked on mobile, row on desktop */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '16px',
          marginBottom: isMobile ? '60px' : '120px',
        }}>
          <img src="/about/faucet.JPG" alt="Faucet" style={{ flex: 1, minWidth: 0, objectFit: 'cover', aspectRatio: '1/1', borderRadius: '4px' }} />
          <img src="/about/plug.jpg" alt="Plug" style={{ flex: 1, minWidth: 0, objectFit: 'cover', aspectRatio: '1/1', borderRadius: '4px' }} />
          <img src="/about/nails.jpg" alt="Nails" style={{ flex: 1, minWidth: 0, objectFit: 'cover', aspectRatio: '1/1', borderRadius: '4px' }} />
        </div>

        {/* Section 3: Who is behind this */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '24px' : '60px',
          alignItems: 'flex-start',
          marginBottom: isMobile ? '60px' : '120px',
        }}>
          <div style={{ flex: 1 }}>
            <img src="/about/self.JPG" alt="Briar Gill" style={{ width: '100%', borderRadius: '4px', display: 'block' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontWeight: 'normal', fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '16px' }}>
              Who is behind this?
            </h2>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: '#333', marginBottom: '40px' }}>
              I'm Briar Gill, a designer who sees the world through questions: Why do people do what they do? What are they really trying to accomplish? What invisible systems shape their experience?
              <br /><br />
              I'm based in Toronto and have spent 7+ years designing products, services, and experiences across manufacturing, retail, and digital environments. I studied Industrial Design at OCAD University, but my real education has been in observing people—how they navigate complexity, adapt to constraints, and find workarounds when systems fail them.
              <br /><br />
                I practice human-centered design through deep listening and systems thinking. I facilitate workshops to uncover hidden needs. I conduct user research to understand context, not just behavior. I map workflows to find leverage points where small changes create big impact. And I prototype solutions that respect both human needs and real-world constraints.
                <br /><br />
                My work spans product design, user research, and service design. I'm particularly interested in how AI and emerging technologies can solve meaningful problems—not just automate tasks, but genuinely improve people's lives.
                This site? An experiment in vibe coding with Claude. Because staying curious means trying new things. You can see my work <a href="https://www.briargill.com" target="_blank" rel="noreferrer" style={{ color: '#111' }}>here</a>!
            </p>
            <h2 style={{ fontWeight: 'normal', fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '16px' }}>
              What inspired the Project?
            </h2>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: '#333' }}>
              The project was inspired by Jane Fulton Suri's Thoughtless Acts (2005), a collection of photographs capturing how people adapt to a world not always perfectly designed for them. While completing my BDes, Suri's work pushed me to start noticing these patterns around me.
            </p>
          </div>
        </div>

        {/* Section 4: Showcased by */}
        <div style={{ marginBottom: isMobile ? '60px' : '120px' }}>
          <h2 style={{ fontWeight: 'normal', fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '32px' }}>
            Showcased by the following collectives & individuals
          </h2>
          <div style={{ borderTop: '1px solid #ddd', paddingTop: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>Table</p>
                <p style={{ fontSize: '0.85rem', color: '#333', margin: 0 }}>A collective of designers, students & friends with roots in industrial design.</p>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#333', marginLeft: '16px' }}>2025</span>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #ddd', paddingTop: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>Florine Bonaventure</p>
                <p style={{ fontSize: '0.85rem', color: '#333', margin: 0 }}>Creative director and publisher</p>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#333', marginLeft: '16px' }}>2021</span>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #ddd' }} />
        </div>

        {/* Footer */}
        <div>
          <h2 style={{ fontWeight: 'normal', fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '20px' }}>
            Let's work together
          </h2>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="https://www.instagram.com/informal_solutions/" target="_blank" rel="noreferrer" style={{ color: '#111' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/briar-gill/" target="_blank" rel="noreferrer" style={{ color: '#111' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:briar.s.gill@gmail.com" style={{ color: '#111' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;