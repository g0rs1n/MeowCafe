import axios from "axios"
import { useState, useEffect, useContext } from "react"
import changeIcon from '../../../assets/img/icons/reservationitem-icons/pen.png'
import deleteIcon from '../../../assets/img/icons/reservationitem-icons/delete.png'
import { UserDataContext } from "../Contexts"
import ReservationsNone from "./ReservationsNone"
import ReservationFormUserVer from "./ReservationFormUserVer"
import './Reservations.scss'

export default function Reservations () {

    const user = useContext(UserDataContext)
    const [reservations, setReservations] = useState([])
    const [addRes, setAddRes] = useState(true)

    useEffect(()=>{
        const funcGetReservations = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getreservations/reservations',{
                    params:{
                        userEmail: user.email
                    },
                    withCredentials: true
                })
                setReservations(response.data)
            } catch (error) {
                console.error('Error: error get reservations', error) 
            }
        }
        funcGetReservations() 
    },[reservations])

    const handleAddResButton = () => {
        setAddRes(!addRes)
    }

    return (
        <>
            <section className={`wrapper-reservations-main ${!reservations || reservations.length === 0 ? 'reservations-none-active' : null}`}>
                {
                    addRes ?  
                    <div className={`${!reservations || reservations.length === 0 ? "wrapper-reservations-none" : "reservations"}`}>
                        {
                            !reservations || reservations.length === 0 ? <ReservationsNone/> :
                            reservations.map(reservation => {
                                return (
                                    <ReservationItem
                                        reservation={reservation}
                                        setReservations = {setReservations}
                                        reservationId = {reservation._id}
                                        key={reservation._id}
                                    />
                                )
                            })
                        }
                        {
                            !reservations || reservations.length === 0 ? null :
                            <div className="wrapper-addNewRes-button">
                                <button onClick={handleAddResButton} className="addNewRes-button__button">
                                    Add new reservation
                                </button>
                            </div>
                        }
                    </div> : 
                    <ReservationFormUserVer addRes = {addRes} setAddRes = {setAddRes}/>              
                }
            </section>
        </>
    )
}

function ReservationItem ({reservation, setReservations, key,reservationId}) {

    const [changeButton, setChangeButton] = useState(true)
    const [changeReservation, setChangeReservation] = useState({})

    const handleChangeReservation = (e) => {
        setChangeReservation({
            ...changeReservation,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setChangeReservation(reservation)
    },[])
    
    const toggleEditMode = () => {
        setChangeButton(!changeButton)
    }

    const funcChangeReservation = async () => {
        try {
            const response = await axios.patch('http://localhost:5001/api/updatereservation/reservation',
                {
                    newReservation: changeReservation,
                    reservationId: reservationId
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            )
            setReservations(prevReservations => {
                return prevReservations.map(res => res._id === reservationId ? response.data : res)
            })

        } catch (error) {
            console.error('Error: error api changeReservation', error)
        }
    }

    const handleButtonChange = () => {
        if (!changeButton){
            funcChangeReservation()
        }
        toggleEditMode()
    }

    const handleButtonDelete = () => {
        const funcDeleteReservation = async () => {
            try {
                const response = await axios.delete('http://localhost:5001/api/deleteReservation/delete',{
                        params:{
                            reservationId: reservationId
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                })
                const { id } = response.data
                setReservations(
                    prevReservations => prevReservations.filter(item => item._id !== id)
                )
            } catch (error) {
                console.error('Error: error api deleteReservation', error)
            }
        }
        funcDeleteReservation()
    }

    return (
        <>
            <div key={key} className="wrapper-reservation-item">
                <div className="reservation-item">
                    <div className="wrapper-reservationData">
                        <div className="section-reservationDate">
                            <div className="reservationDate-title">
                                <h2 className="reservationDate-title__h2">
                                    Reservation date
                                </h2>
                            </div>
                            <div className="wrapper-reservationDate">
                                <div className="reservationDate">
                                    <div className="wrapper-reservation-date">
                                        <h3 className="reservationDate__date-h3">
                                            Date: {!changeButton ? <input value={changeReservation.date} onChange={handleChangeReservation} name="date" className="reservation-input-change input-change-date" type="text" /> : changeReservation.date }
                                        </h3>
                                        <h3 className="reservationDate__time-h3">
                                            Time: {!changeButton ? <input onChange={handleChangeReservation} name="time" className="reservation-input-change input-change-time" value={changeReservation.time} type="text" /> : changeReservation.time}
                                        </h3>    
                                    </div>
                                    <div className="reservation-email">
                                        <p className="reservation-email__p">
                                            Email: {!changeButton ? <input onChange={handleChangeReservation} name="email" className="reservation-input-change input-change-email" value={changeReservation.email} type="text" /> : changeReservation.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-informationData">
                            <div className="informationData-title">
                                <h2 className="informationData-title__h2">
                                    Reservation details
                                </h2>
                            </div>
                            <div className="wrapper-informationData">
                                <div className="informationData-user">
                                    <p className="informationData-user__name-p">
                                        Name: {!changeButton ? <input onChange={handleChangeReservation} name="name" className="reservation-input-change input-change-name" value={changeReservation.name} type="text" /> : changeReservation.name}
                                    </p>
                                    <p className="informationData-user__phone-p">
                                        Number Phone: {!changeButton ? <input onChange={handleChangeReservation} name="phone" className="reservation-input-change input-change-phone" value={changeReservation.phone} type="text" /> : changeReservation.phone}
                                    </p>
                                </div>
                                <div className="informationData-order">
                                    <p className="informationData-order__hours-p">
                                        Number of hours: {!changeButton ? <input onChange={handleChangeReservation} name="hours" className="reservation-input-change input-change-hours" value={changeReservation.hours} type="text" /> : changeReservation.hours}
                                    </p>
                                    <p className="informationData-order__seats-p">
                                        Number of seats: {!changeButton ? <input onChange={handleChangeReservation} name="seats" className="reservation-input-change input-change-seats" value={changeReservation.seats} type="text" /> : changeReservation.seats}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-reservationIcons">
                        <div className="reservationIcons">
                            {
                                changeButton ?  
                                <img onClick={handleButtonChange} className="reservationicons__change-icon" src={changeIcon} alt="change" /> :
                                <button onClick={handleButtonChange} className="reservationsicons__button-save">Save</button>
                            }
                            <img onClick={handleButtonDelete} className="reservationicons__delete-icon" src={deleteIcon} alt="delete" /> 
                        </div>
                        <div className="reservation-status">
                            <p className={`${ reservation.status === "Active" ? "reservation-status_active" : "reservation-status__p"}`}>
                                {reservation.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}