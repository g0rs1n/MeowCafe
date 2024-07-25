import { Link } from "react-router-dom";
import imgCat from "../../assets/img/images/cat.png"
import "./Section-3.scss"

export function Section_3 () {
    return (
        <>
            <section className="section-third-wrapper">
                <div className="container-main">
                    <div className="section-third">
                        <div className="section-third-title">
                            <h2 className="section-third-title__h2">
                                Reservation
                            </h2>
                        </div>
                        <div className="section-third-main">
                            <p className="section-third-main__p">
                                To book a time and place, follow the link and fill out the form, after which you will be contacted for confirmation, and if you want to see all available places and times, track your reservation, change data, register in your personal account!
                            </p>
                        </div>
                        <div className="section-third-link-wrapper">
                            <div className="section-third-link">
                                <Link to={'/reservation'} className="section-third-link__link">
                                    Reservation
                                </Link>
                                <img className="section-third-link__img" src={imgCat} alt="cat" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}