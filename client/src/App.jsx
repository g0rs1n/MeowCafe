import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import ClientVerApp from './ClientVerApp'
import {Header} from './components/ClientVerApp/Header/Header'
import { Footer } from './components/ClientVerApp/Footer/Footer'
import {About} from './components/ClientVerApp/About/About'
import {Reservation} from './components/ClientVerApp/Reservation/Reservation'
import {Contacts} from './components/ClientVerApp/Contacts/Contacts'
import { ErrorElem } from './components/ErrorELem/ErrorElem'
import { Login } from './components/ClientVerApp/Login/Login'
import { SignUp } from './components/ClientVerApp/SignUp/SignUp'
import ProtectedRoute from './components/UserVerApp/ProtectedRoute'
import Reservations from './components/UserVerApp/Reservations/Reservations'
import Information from './components/UserVerApp/Information/Information'
import Deleted from './components/UserVerApp/Deleted/Deleted'
import UserPanel from './components/UserVerApp/UserPanel/UserPanel'
import Questions from './components/UserVerApp/Questions/Questions'

export default function App () {

    const location = useLocation()

    return (
        <>
            <div className="wrapper">
                {!(location.pathname == "/login" || location.pathname == "/signup" || location.pathname.startsWith("/app")) && <Header/>}
                    <Routes>
                        <Route path='/' element={<ClientVerApp/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/reservation' element={<Reservation/>} />
                        <Route path='/contacts' element={<Contacts/>} />
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/app' element={<ProtectedRoute/>}>
                            <Route index element={<Navigate to={'information'} replace/>}/>
                            <Route path='information' element={<Information/>} />
                            <Route path='reservations' element={<Reservations/>}/>
                            <Route path='deleted' element={<Deleted/>}/>
                            <Route path='user/:username' element={<UserPanel/>}/>
                            <Route path='questions' element={<Questions/>}/>
                        </Route>
                        <Route path='*' element={<ErrorElem/>}/>
                    </Routes>
                {!(location.pathname == "/login" || location.pathname == "/signup" || location.pathname.startsWith("/app")) && <Footer/>}
            </div> 
        </>
    )
}

