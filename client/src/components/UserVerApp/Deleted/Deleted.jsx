import { useState, useEffect, useContext } from 'react'
import iconReturn from '../../../assets/img/icons/deleted-icons/undo.png'
import axios from 'axios'
import { UserDataContext } from '../Contexts'
import './Deleted.scss'

export default function Deleted () {

    const [deletedReservations, setDeletedReservations] = useState([])
    const user = useContext(UserDataContext)

    useEffect(() => {
        const funcGetDelReservation = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getDeletedReservation/deleted',{
                    params: {
                        userEmail: user.email
                    },
                    withCredentials: true
                })
                setDeletedReservations(response.data)
            } catch (error) {
                console.error('Error: api getDelReservations front', error)
            }
        }
        funcGetDelReservation()
    },[deletedReservations])

    return (
        <>
            <div className='wrapper-deleted-page'>
                <div className='deleted-page'>
                    {
                        deletedReservations.map(delReservation => {
                            return (
                                <DeletedItem
                                    delReservation = {delReservation}
                                    setDeletedReservations = {setDeletedReservations}
                                    key={delReservation._id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function DeletedItem ({delReservation, setDeletedReservations, key}) {

    const handleButtonRestoreClick = () => {
        const funcRestoreDeletedRes = async () => {
            try {
                const response = await axios.delete('http://localhost:5001/api/restoreDelRes/restore',{
                    params:{
                        deletedResId: delReservation._id
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })
                const {id} = response.data
                setDeletedReservations(
                    prevRes => prevRes.filter(item => item._id !== id)
                )
            } catch (error) {
                console.error('Error: api error restoreDeletedRes front', error)
            }
        }
        funcRestoreDeletedRes()
    }

    return (
        <>
            <div key={key} className='wrapper-deleted-item'>
                <div className="deleted-item">
                    <div className='wrapper-deleted-item-main'>
                        <div className='deleted-item-title'>
                            <h2 className='deleted-item-title__h2'>
                                Reservation Information
                            </h2>
                        </div>
                        <div className='deleted-item-info'>
                            <p className='deleted-item-info__p'>
                                Date: {delReservation.date}
                            </p>
                            <p className='deleted-item-info__p'>
                                Time: {delReservation.time}
                            </p>
                        </div>
                    </div>
                    <div className='wrapper-deleted-item-icon'>
                        <div onClick={handleButtonRestoreClick} className='deleted-item-icon'>
                            <img className='deleted-item-icon__img' src={iconReturn} alt="restore"/>
                            <p className='deleted-item-icon__p'>
                                Restore
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}