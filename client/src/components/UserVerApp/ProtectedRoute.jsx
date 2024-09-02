import axios from 'axios'
import { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import UserVerApp from '../../UserVerApp'

export default function ProtectedRoute () {

    const [isLoginned, setIsLoginned] = useState(null)

    useEffect(() => {
        const funcCheckLogin = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/user/checkauth',{
                    withCredentials: true,
                })
                if (response.status === 200) {
                    setIsLoginned(true)
                } else if (response.status === 401){
                    console.log('Not found Token')
                } else {
                    setIsLoginned(false)
                }
            } catch (error) {
                setIsLoginned(false)
                console.error('Error: error api check login', error)
            }
        }
        funcCheckLogin()
    }, [])

    if (isLoginned === null) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <>
            {
                isLoginned ? <UserVerApp/> : <Navigate to={'/login'}/>
            }
        </>
    )
}