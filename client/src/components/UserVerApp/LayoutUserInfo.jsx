import { useState, useEffect } from "react"


export default function LayoutUserInfo () {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        const funcGetUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getme/me')
                setUserData(response.data)
            } catch (error) {
                console.error('Error: error api get UserData in UserInfo', error)
            }
        }
        funcGetUserData()
    }, [])

    return (
        <>
            <div className="wrapper-userInfo">
                <div className="userinfo-button">
                    <div className="userinfo-name">
                        <p className="userinfo-name__p">
                            {userData.name}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}