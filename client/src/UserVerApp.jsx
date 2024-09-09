import HeaderUser from "./components/UserVerApp/Header/HeaderUser";
import Sidebar from "./components/UserVerApp/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { UserDataContext, SetUserDataContext } from "./components/UserVerApp/Contexts";

export default function UserVerApp () {

    const [userData, setUserData] = useState({})

    return (
        <>
            <UserDataContext.Provider value={userData}>
                <SetUserDataContext.Provider value={setUserData}>
                            <div className="wrapper-main-userver">
                                <div className="wrapper-main_1">
                                    <div className="wrapper-header-user">
                                        <HeaderUser/>
                                    </div>
                                </div>
                                <div className="wrapper-main_2">
                                    <div className="wrapper-sidebar">
                                        <Sidebar/>
                                    </div>
                                    <Outlet/>
                                </div>
                            </div> 
                </SetUserDataContext.Provider>
            </UserDataContext.Provider>
        </>
    )
}