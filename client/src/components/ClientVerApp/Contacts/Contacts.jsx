import "./Contacts.scss"
import iconTwitter from  '../../../assets/img/icons/icons-twitter_footer.svg'
import iconFacebook from '../../../assets/img/icons/icons-facebook_footer.svg'
import iconPinterest from '../../../assets/img/icons/icons-pinterest_footer.svg'


export function Contacts () {
    return (
        <>
            <div className="section-contacts-wrapper">
                <div className="container-main">
                    <div className="section-contacts">
                        <div className="section-contacts-main">
                            <h2 className="section-contacts-main__h2">
                                Our Social Networks
                            </h2>
                            <div className="contacts-main-icons">
                                <a className="contacts-main-icons__a" href="#!">
                                    <img className="contacts-main-icons__img" src={iconTwitter}  alt="twitter" />
                                </a>
                                <a className="contacts-main-icons__a" href="#!">
                                    <img className="contacts-main-icons__img" src={iconFacebook}  alt="facebook" />
                                </a>
                                <a className="contacts-main-icons__a" href="#!">
                                    <img className="contacts-main-icons__img" src={iconPinterest}  alt="pinterest" />
                                </a>
                            </div>
                        </div>
                        <div className="section-contacts-main">
                            <h2 className="section-contacts-main__h2">
                                Our Address and Contacts
                            </h2>
                            <ul className="contacts-main-spisok">
                                <li className="footer-menu-item">
                                    Our address
                                </li>
                                <li className="footer-menu-item">
                                    Our number phone
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}