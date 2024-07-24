import React from 'react'
import ReactDOM from 'react-dom/client' 
import './styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {Header} from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
            <App/>
          <Footer/>
        </div>
      </BrowserRouter>
  </React.StrictMode>,
)
