import React from 'react'
import ReactDOM from 'react-dom/client' 
import './styles/main.scss'
import AppClient from './AppClient'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppClient/>
    </BrowserRouter>
  </React.StrictMode>,
)
