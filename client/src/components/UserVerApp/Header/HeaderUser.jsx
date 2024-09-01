import LayoutUserInfo from "./LayoutUserInfo";
import iconLogo from '../../../assets/img/logo/paw.png'
import {Link} from 'react-router-dom'
import './HeaderUser.scss'

export default function HeaderUser () {
    return (
        <>
            <header className="user-header">
                <div className="user-header-icon">
                    <Link to={''} className="user-header_icon-link">
                        <img src={iconLogo} alt="paw_logo" className="user-header_icon-logo"/>
                    </Link>
                </div>
                <LayoutUserInfo/>
            </header>
        </>
    )
}