import { Link } from "react-router-dom"
import imgForLink from '../../assets/img/images/kitty.png'
import './Section-1.scss'

export function Section_1 () {
    return (
        <>
            <section className="section-first-wrapper">
                <div className="container-main">
                    <div className="section-first">
                        <div className="section-first-title">
                            <h2 className="section-first-title__h2">
                                We MeowCafe
                            </h2>
                        </div>
                        <div className="section-first-main">
                            <p className="section-first-main__p">
                                Welcome to our MeowCafe website! You can have a great time here at MeowCafe. So that you can book your seats in advance and choose the time that suits you, you need to register by clicking on the button below. With care your MeowCafe.
                            </p>
                        </div>
                        <div className="section-first-link">
                            <img className="section-first-link__img" src={imgForLink} alt="kitty" />
                            <Link className="section-first-link__link" to={'/login'}>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}