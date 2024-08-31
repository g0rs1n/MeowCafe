import { Routes, Route, useLocation } from 'react-router-dom'
import { useReducer, useState } from 'react'
import ClientVerApp from './ClientVerApp'
import {Header} from './components/ClientVerApp/Header/Header'
import { Footer } from './components/ClientVerApp/Footer/Footer'
import {About} from './components/ClientVerApp/About/About'
import {Reservation} from './components/ClientVerApp/Reservation/Reservation'
import {Contacts} from './components/ClientVerApp/Contacts/Contacts'
import { ErrorElem } from './components/ErrorELem/ErrorElem'
import { Login } from './components/ClientVerApp/Login/Login'
import { SignUp } from './components/ClientVerApp/SignUp/SignUp'
import UserVerApp from './UserVerApp'
import { isLoginReducer } from './reducers/loginReducer'
import ProtectedRoute from './components/UserVerApp/ProtectedRoute'

export default function App () {

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
                        <Route path='/login' 
                        element={<Login/>}/>
                        <Route path='/signup' 
                        element={<SignUp/>}/>
                        <Route path='/app' element={<ProtectedRoute><UserVerApp/></ProtectedRoute>}>
                            
                        </Route>
                        <Route path='*' element={<ErrorElem/>}/>
                    </Routes>
                {!(location.pathname == "/login" || location.pathname == "/signup") && <Footer/>}
            </div> 
        </>
    )
}

