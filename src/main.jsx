import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WeatherContext from './context/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherContext>
      <App />
    </WeatherContext>
  </StrictMode>,
)
