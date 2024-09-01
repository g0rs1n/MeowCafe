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

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)){
            serIsActiveSidebar(!isActiveSidebar)
        }
    }

    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

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
                        {isActiveSidebar ? null : <img onClick={handleActiveClick} className="item-icon information-icon" src={iconInformation} alt="information"/>}
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={''} >Information</Link> : null
                        }
                    </div>
                    <div className="wrapper-item reservation-link">
                        {isActiveSidebar ? null : <img onClick={handleActiveClick}  className="item-icon reservation-icon" src={iconReservation} alt="reservation"/>}
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={''} >Reservation</Link> : null
                        }
                    </div>
                    <div className="wrapper-item deleted-link">
                        {isActiveSidebar ? null : <img onClick={handleActiveClick}  className="item-icon deleted-icon" src={iconDeleted} alt="deleted"/>}
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={''} >Deleted</Link> : null
                        }
                    </div>
                    <div className="wrapper-item questiones-link">
                        {isActiveSidebar ? null : <img onClick={handleActiveClick}  className="item-icon questiones-icon" src={iconQuestiones} alt="questiones"/>}
                        {
                            isActiveSidebar ? <Link className="item-link information-link" to={''} >Questiones</Link> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}