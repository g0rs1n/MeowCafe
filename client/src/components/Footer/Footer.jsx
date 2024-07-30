import { Link } from "react-router-dom";
import './Footer.scss'
import logo from '../../assets/img/logo/paw.png'
import iconTwitter from  '../../assets/img/icons/icons-twitter_footer.svg'
import iconFacebook from '../../assets/img/icons/icons-facebook_footer.svg'
import iconPinterest from '../../assets/img/icons/icons-pinterest_footer.svg'
import heart from '../../assets/img/icons/heart-footer.svg'

export function Footer () {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-column-1">
                            <div className="footer-logo">
                                <Link to={'/'} className="footer-logo__link">
                                    <img className="footer-logo-img" src={logo} alt="logo" />
                                </Link>
                            </div>
                            <ul className="footer-menu">
                                <li className="footer-menu-item">
                                    <Link to={'/about'} className="footer-item-link">
                                        About
                                    </Link>
                                </li>
                                <li className="footer-menu-item">
                                    <Link to={'/reservation'} className="footer-item-link">
                                        Reservation
                                    </Link>
                                </li>
                                <li className="footer-menu-item">
                                    <Link to={'/contacts'} className="footer-item-link">
                                        Contacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column-2">
                            <ul className="footer-menu">
                                <li className="footer-menu-item">
                                    Contacts
                                </li>
                                <li className="footer-menu-item">
                                    Our address
                                </li>
                                <li className="footer-menu-item">
                                    Our number phone
                                </li>
                            </ul>
                            <ul className="footer-menu__media">
                                <li className="footer-media-item">
                                    <a href="#!" className="media-item-link">
                                        <img src={iconTwitter} alt="twitter" />
                                    </a>
                                </li>
                                <li className="footer-media-item">
                                    <a href="#!" className="media-item-link">
                                        <img src={iconFacebook} alt="facebook" />
                                    </a>
                                </li>
                                <li className="footer-media-item">
                                    <a href="#!" className="media-item-link">
                                        <img src={iconPinterest} alt="pinterest" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-by-autor">
                        <p className="footer-by-autor__p">
                            Made by g0rs1n
                        </p>
                        <img className="autor-img" src={heart}/>
                    </div>
                </div>
            </footer>
        </>
    )
}