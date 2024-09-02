import HeaderUser from "./components/UserVerApp/Header/HeaderUser";
import Sidebar from "./components/UserVerApp/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


export default function UserVerApp () {
    return (
        <>
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
                    <div className="main-userver">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}