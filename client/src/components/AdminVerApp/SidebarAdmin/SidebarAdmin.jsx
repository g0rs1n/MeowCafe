import { useState, useRef } from "react"
import { Link  } from "react-router-dom"
import iconInformation from '../../../assets/img/icons/sidebar-icons/information/info.png'
import iconReservation from '../../../assets/img/icons/sidebar-icons/reservation/list.png'
import iconQuestiones from '../../../assets/img/icons/sidebar-icons/questions/conversation.png'
import iconArrow from '../../../assets/img/icons/sidebar-icons/arrow/arrow.png'
import '../../UserVerApp/Sidebar/Sidebar.scss'

export default function SidebarAdmin () {

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
                            <Link to={'/admin/information'} className="img-item-link">
                                <img onClick={handleActiveClick} className="item-icon information-icon" src={iconInformation} alt="information"/>
                            </Link>
                        }
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={'/admin/information'} >Information</Link> : null
                        }
                    </div>
                    <div className="wrapper-item reservation-link">
                        {isActiveSidebar ? null : 
                            <Link to={'/admin/reservations'} className="img-item-link">
                                <img onClick={handleActiveClick}  className="item-icon reservations-icon" src={iconReservation} alt="reservations"/>
                            </Link>
                        }
                        {
                            isActiveSidebar ? <Link className="item-link reservations-link" to={'/admin/reservations'} >Reservations</Link> : null
                        }
                    </div>
                    <div className="wrapper-item questiones-link">
                        {isActiveSidebar ? null : 
                        <Link to={'/admin/questions'} className="img-item-link">
                            <img onClick={handleActiveClick}  className="item-icon questiones-icon" src={iconQuestiones} alt="questiones"/>
                        </Link>
                        }
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={'/admin/questions'} >Questions</Link> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}