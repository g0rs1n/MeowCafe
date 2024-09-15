import { Outlet } from "react-router-dom"
import { useState } from "react"
import HeaderUser from "./components/UserVerApp/Header/HeaderUser"
import SidebarAdmin from './components/AdminVerApp/SidebarAdmin/SidebarAdmin'
import { UserDataContext, SetUserDataContext } from "./components/UserVerApp/Contexts"

export default function AdminVerApp ({isAdmin}) {

    const [userData, setUserData] = useState({})

    return (
        <>
            <UserDataContext.Provider value={userData}>
                <SetUserDataContext.Provider value={setUserData}>
                    <div className="wrapper-main-userver">
                        <div className="wrapper-main_1">
                            <div className="wrapper-header-user">
                                <HeaderUser isAdmin={isAdmin}/>
                            </div>
                        </div>
                        <div className="wrapper-main_2">
                            <div className="wrapper-sidebar">
                                <SidebarAdmin/>
                            </div>
                            <Outlet/>
                        </div>
                    </div> 
                </SetUserDataContext.Provider>
            </UserDataContext.Provider>
        </>
    )
}