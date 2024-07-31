import { Link } from "react-router-dom"
import './Header.scss'
import logo from '../../../assets/img/logo/paw.png'

export function Header () {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <div className="logo">
                            <Link to={'/'} className="logo-link">
                                <img className="logo-img" src={logo}  alt="logo" />
                            </Link>
                        </div>
                        <nav className="nav">
                            <ul className="menu">
                                <li className="menu-item">
                                    <Link className="item-link" to={'/about'} >About</Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="item-link" to={'/reservation'} >Reservation</Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="item-link" to={'/contacts'} >Contacts</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-button">
                            <Link className="header-button__login" to={'/login'} >Login</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}