import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/footer.tsx'
import Treinos from './pages/treinos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Treinos />
    <Footer />
  </StrictMode>,
)
