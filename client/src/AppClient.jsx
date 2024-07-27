import { Routes, Route, useLocation } from 'react-router-dom'
import ClientVerApp from './ClientVerApp'
import {Header} from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {About} from './components/About/About'
import {Reservation} from './components/Reservation/Reservation'
import {Contacts} from './components/Contacts/Contacts'
import { ErrorElem } from './components/ErrorELem/ErrorElem'
import { Login } from './components/Login/Login'

export default function AppClient () {

    const location = useLocation()

    return (
        <>
            <div className="wrapper">
                {!(location.pathname == "/login" || location.pathname == "/signup") && <Header/>}
                    <Routes>
                        <Route path='/' element={<ClientVerApp/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/reservation' element={<Reservation/>} />
                        <Route path='/contacts' element={<Contacts/>} />
                        <Route path='/login' element={<Login/>}/>
                        <Route path='*' element={<ErrorElem/>}/>
                    </Routes>
                {!(location.pathname == "/login" || location.pathname == "/signup") && <Footer/>}
            </div> 
        </>
    )
}

