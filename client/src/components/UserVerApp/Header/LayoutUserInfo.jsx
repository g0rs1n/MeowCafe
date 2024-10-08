import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { SetUserDataContext, UserDataContext } from "../Contexts"


export default function LayoutUserInfo ({isAdmin}) {

    const userData = useContext(UserDataContext)
    const setUserData = useContext(SetUserDataContext)

    useEffect(() => {
        const funcGetUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getme/me',{
                    withCredentials: true
                })
                setUserData(response.data)
            } catch (error) {
                console.error('Error: error api get UserData in UserInfo', error)
            }
        }
        funcGetUserData()
    }, [])

    return (
        <>
            <div className="wrapper-userinfo">
                {
                    isAdmin ? 
                    (<div className="userinfo-button">
                        <div className="userinfo-name">
                            <p className="userinfo-name__p">
                                {userData.name}
                            </p>
                        </div>
                    </div>) :
                    (<Link to={`/app/user/${userData.name}`}>
                        <div className="userinfo-button">
                            <div className="userinfo-name">
                                <p className="userinfo-name__p">
                                    {userData.name}
                                </p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </>
    )
}