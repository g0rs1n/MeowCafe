import axios from "axios"
import { useEffect, useState } from "react"
import AdminVerApp from "../../AdminVerApp"
import { Navigate } from "react-router-dom"

export default function ProtectedRouteAdmin () {

    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const funcCheckIsAdmin = async () => {
            try {
                
                const response = await axios.get('http://localhost:5001/api/checkadmin/admin',{
                    withCredentials: true
                })

                if (response.status === 200){
                    setIsAdmin(true)
                } else if (response.status === 400 || 401) {
                    console.log('No access')
                }

            } catch (error) {
                console.error('Error: api checkIsAdmin front', error)
            } finally {
                setLoading(!loading)
            }
        }
        funcCheckIsAdmin()
    },[])

    if (loading) {
        return (
            <>
                <h2>
                    Loading...
                </h2>
            </>
        )
    }

    return (
        <>
           {
                isAdmin ? <AdminVerApp isAdmin={isAdmin}/> : <Navigate to={'/login'}/>
           }
        </>
    )
}