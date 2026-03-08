import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Submit from './Submit.tsx'
import ThankYou from './ThankYou.tsx'

const root = document.getElementById('root')!
const path = window.location.pathname

if (path === '/about' || path === '/submit' || path === '/thank-you') {
  document.body.style.overflow = 'auto'
  document.documentElement.style.overflow = 'auto'
} else {
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

createRoot(root).render(
  <StrictMode>
    {path === '/about' ? <About /> :
     path === '/submit' ? <Submit /> :
     path === '/thank-you' ? <ThankYou /> :
     <App />}
  </StrictMode>
)