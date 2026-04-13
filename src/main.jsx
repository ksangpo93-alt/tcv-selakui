import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'; // Added this for SEO management
import App from './App.jsx'
import './index.css'   // Contains Tailwind directives
import './styles.css'  // Contains ALL custom styling, colors, and typography

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Wrap the app with HelmetProvider for SEO */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)