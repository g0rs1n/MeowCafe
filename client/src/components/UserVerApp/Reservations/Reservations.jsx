import axios from "axios"
import { useState, useEffect, useContext } from "react"
import changeIcon from '../../../assets/img/icons/reservationitem-icons/pen.png'
import deleteIcon from '../../../assets/img/icons/reservationitem-icons/delete.png'
import { UserDataContext } from "../Contexts"
import ReservationsNone from "./ReservationsNone"
import './Reservations.scss'

export default function Reservations () {

    const user = useContext(UserDataContext)
    const [reservations, setReservations] = useState([])

    useEffect(()=>{
        const funcGetReservations = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getreservations/reservations',{
                    params:{
                        username: user.name
                    },
                    withCredentials: true
                })
                setReservations(response.data)
            } catch (error) {
                console.error('Error: error get reservations', error)
            }
        }
    },[])


    return (
        <>
            <section className={`wrapper-reservations-main ${reservations.length === 0 ? 'reservations-none-active' : null}`}>
                <div className={`${reservations.length === 0 ? "wrapper-reservations-none" : "reservations"}`}>
                        {
                            reservations.length === 0 ? <ReservationsNone/> :
                            reservations.map(reservation => {
                                return (
                                    <ReservationItem
                                        reservation={reservation}
                                        setReservations = {setReservations}
                                        key={reservation.id}
                                    />
                                )
                            })
                        }
                </div>
            </section>
        </>
    )
}

function ReservationItem ({reservation, setReservations, key}) {

    const [changeButton, setChangeButton] = useState(true)
    const [changeReservation, setChangeReservation] = useState({})

    const handleChangeReservation = (e) => {
        setChangeReservation({
            ...changeReservation,
            [e.target.name]: e.target.value
        })
    }
    

    const handleButtonChange = () => {
        setChangeButton(!changeButton)
        if (changeButton) {
            const funcChangeReservation = async () => {
                try {
                    
                    const response = await axios.patch('',changeReservation,{
                        withCredentials: true
                    })
                    setReservations(response.data)

                } catch (error) {
                    console.error('Error: error api changeReservation', error)
                }
            }
            
        }
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
                                    <h3 className="reservationDate__date-h3">
                                        Date: {!changeButton ? <input onChange={handleChangeReservation} className="reservation-input-change input-change-date" value={reservation.reservationDate} type="text" /> : reservation.reservationDate }
                                    </h3>
                                    <h3 className="reservationDate__time-h3">
                                        Time: {!changeButton ? <input onChange={handleChangeReservation} className="reservation-input-change input-change-time" value={reservation.reservationTime} type="text" /> : reservation.reservationTime}
                                    </h3>
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
                                        Name: {!changeButton ? <input onChange={handleChangeReservation} className="reservation-input-change input-change-name" value={reservation.name} type="text" /> : reservation.name}
                                    </p>
                                    <p className="informationData-user__phone-p">
                                        Number Phone: {!changeButton ? <input onChange={handleChangeReservation} className="reservation-input-change input-change-phone" value={reservation.phone} type="text" /> : reservation.phone}
                                    </p>
                                </div>
                                <div className="informationData-order">
                                    <p className="informationData-order__hours-p">
                                        Number of hours: {!changeButton ? <input onChange={handleChangeReservation} className="reservation-input-change input-change-hours" value={reservation.hoursReservation} type="text" /> : reservation.hoursReservation}
                                    </p>
                                    <p className="informationData-order__seats-p">
                                        Number of seats: {!changeButton ? <input onChange={handleChangeReservation} className="reservation-input-change input-change-seats" value={reservation.seats} type="text" /> : reservation.seats}
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
                            <img className="reservationicons__delete-icon" src={deleteIcon} alt="delete" /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}