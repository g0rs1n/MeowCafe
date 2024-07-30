import {Link} from 'react-router-dom'
import "./About.scss"

export function About () {
    return (
        <>
            <section className="section-about-wrapper">
                <div className="container-main">
                    <div className="section-about">
                        <div className="section-about-main">
                            <h2 className="section-about-main__h2">
                                We are MeowCafe
                            </h2>
                            <p className="section-about-main__p">
                                Welcome to MeowCafe, we are a cat cafe and we invite you to visit our cafe. In our cafe you can relax, enjoy various drinks and snacks, and also play with our pets.
                            </p>
                        </div>
                        <div className="section-about-main">
                            <h2 className="section-about-main__h2">
                                Login to your account
                            </h2>
                            <p className="section-about-main__p">
                                Log in to your account so that you can receive and track the latest information about free time to reserve seats in our cafe, track your order, change order details, track the history of your orders. Register an account for your and our convenience!
                            </p>
                            <div className="section-about-button">
                                <Link to={'/login'} className='section-about-button__link'>
                                    Login
                                </Link>
                            </div>
                        </div>
                        <div className="section-about-main">
                            <h2 className="section-about-main__h2">
                                Reservation
                            </h2>
                            <p className="section-about-main__p">
                                If you would like to reserve a place in the cafe, you can do so immediately by clicking on the button below.
                            </p>
                            <div className="section-about-button">
                                <Link to={'/reservation'} className='section-about-button__link'>
                                    Reservation
                                </Link>
                            </div>
                        </div>
                        <div className="section-about-main">
                            <h2 className="section-about-main__h2">
                                Our Contacts
                            </h2>
                            <p className="section-about-main__p">
                                So that you can find us and contact us in any way convenient for you, click the button below.
                            </p>
                            <div className="section-about-button">
                                <Link to={'/contacts'} className='section-about-button__link'>
                                    Contacts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}