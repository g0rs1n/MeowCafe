import { useState, useRef, useEffect} from "react"
import { Link, useLocation } from "react-router-dom"
import iconInformation from '../../../assets/img/icons/sidebar-icons/information/info.png'
import iconReservation from '../../../assets/img/icons/sidebar-icons/reservation/list.png'
import iconDeleted from '../../../assets/img/icons/sidebar-icons/deleted/bin.png'
import iconQuestiones from '../../../assets/img/icons/sidebar-icons/questions/conversation.png'
import iconArrow from '../../../assets/img/icons/sidebar-icons/arrow/arrow.png'
import './Sidebar.scss'


export default function Sidebar () {

    const location = useLocation()
    const sidebarRef = useRef(null)

    const [isActiveSidebar, serIsActiveSidebar] = useState(true)

    const handleActiveClick = () => {
        serIsActiveSidebar(!isActiveSidebar)
    }

    return (
        <>
            <div ref={sidebarRef} className={`sidebar ${isActiveSidebar ? 'active-sidebar' : ''}`}>
                <div className="wrapper-sidebar-arrow">
                    <div onClick={handleActiveClick} className="sidebar-arrow">
                        <img className={`sidebar-arrow__img ${isActiveSidebar ? 'active-arrow' : ''}`} src={iconArrow} alt="arrow" />
                    </div>
                </div>
                <div className="sidebar-links">
                    <div className="wrapper-item information-link">
                        {isActiveSidebar ? null : 
                            <Link to={'/information'} className="img-item-link">
                                <img onClick={handleActiveClick} className="item-icon information-icon" src={iconInformation} alt="information"/>
                            </Link>
                        }
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={'/information'} >Information</Link> : null
                        }
                    </div>
                    <div className="wrapper-item reservation-link">
                        {isActiveSidebar ? null : 
                            <Link to={'/reservations'} className="img-item-link">
                                <img onClick={handleActiveClick}  className="item-icon reservation-icon" src={iconReservation} alt="reservation"/>
                            </Link>
                        }
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={'/reservations'} >Reservation</Link> : null
                        }
                    </div>
                    <div className="wrapper-item deleted-link">
                        {isActiveSidebar ? null : 
                            <Link to={'/deleted'} className="img-item-link">
                                <img onClick={handleActiveClick}  className="item-icon deleted-icon" src={iconDeleted} alt="deleted"/>
                            </Link>
                        }
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={'/deleted'} >Deleted</Link> : null
                        }
                    </div>
                    <div className="wrapper-item questiones-link">
                        {isActiveSidebar ? null : 
                        <Link to={'/questiones'} className="img-item-link">
                            <img onClick={handleActiveClick}  className="item-icon questiones-icon" src={iconQuestiones} alt="questiones"/>
                        </Link>
                        }
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={'/questiones'} >Questiones</Link> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}