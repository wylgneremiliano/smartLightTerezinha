import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RotasDoApp } from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RotasDoApp />
  </StrictMode>,
)
