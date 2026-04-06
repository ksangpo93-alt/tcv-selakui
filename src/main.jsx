import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // Contains Tailwind directives
import './styles.css'  // Contains ALL custom styling, colors, and typography

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)