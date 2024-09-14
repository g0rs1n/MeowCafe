import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import UserVerApp from '../../UserVerApp'

export default function ProtectedRoute () {

    const navigate = useNavigate()
    const [authStatus, setAuthStatus] = useState({
        isLoginned: false,
        isLoading: true,
    })

    useEffect(() => {
        const funcCheckLogin = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/user/checkauth',{
                    withCredentials: true,
                })
                if (response.status === 200) {
                    if (response.data.role === 'admin') {
                        navigate('/admin')
                    } else {
                        setAuthStatus({
                            ...authStatus,
                            isLoginned: true,
                            isLoading: false,
                        })
                    }
                } else if (response.status === 401){
                    console.log('Not found Token')
                    setAuthStatus({
                        ...authStatus, isLoginned: false,isLoading: false,
                    })
                } else {
                    setAuthStatus({
                        ...authStatus, isLoginned: false,isLoading: false,
                    })
                }
            } catch (error) {
                setAuthStatus({
                    ...authStatus, isLoginned: false,isLoading: false,
                })
                console.error('Error: error api check login', error)
            }
        }
        funcCheckLogin()
    }, [])

    if (authStatus.isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <>
            {
                authStatus.isLoginned ? <UserVerApp/> : <Navigate to={'/login'}/>
            }
        </>
    )
}