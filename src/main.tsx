import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { LoadingProvider } from './contexts/LoadingContext'
import BackgroundProvider from './contexts/BackgroundContext/BackgroundProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingProvider>
      <BackgroundProvider>
        <App />
      </BackgroundProvider>
    </LoadingProvider>
  </StrictMode>,
)
