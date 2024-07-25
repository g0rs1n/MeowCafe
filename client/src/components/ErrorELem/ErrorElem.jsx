import "./ErrorElem.scss"
import { Link } from "react-router-dom"

export function ErrorElem () {
    return (
        <>
            <div className="error-page-wrapper">
                <div className="container-main">
                    <div className="error-page">
                        <div className="error-page-title">
                            <h2 className="error-page-title__h2">
                                Oops... no such page found
                            </h2>
                        </div>
                        <div className="error-page-main">
                            <p className="error-page-main__p">
                                No such page was found at this address, you can return to the main page and try again by clicking on the button below
                            </p>
                        </div>
                        <div className="error-page-link">
                            <Link to={'/'} className="error-page-link__link">
                                Return to Home Page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}