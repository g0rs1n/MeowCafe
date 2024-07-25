import React from 'react'
import ReactDOM from 'react-dom/client' 
import './styles/main.scss'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import App from './App'
import {Header} from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {About} from './components/About/About'
import {Reservation} from './components/Reservation/Reservation'
import {Contacts} from './components/Contacts/Contacts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
            <Routes>
                <Route exact path='/' element={<App/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/reservation' element={<Reservation/>} />
                <Route path='/contacts' element={<Contacts/>} />
            </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
  </React.StrictMode>,
)
