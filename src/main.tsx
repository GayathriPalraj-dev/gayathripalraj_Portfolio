import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProviders } from './components/common/AppProviders'
import App from './App'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
