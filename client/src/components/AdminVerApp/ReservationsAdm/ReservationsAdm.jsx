import axios from "axios"
import { useEffect, useState } from "react"
import './ReservationsAdm.scss'
import '../../UserVerApp/Reservations/Reservations.scss'

export default function ReservationsAdm () {

    const [reservations, setReservations] = useState([])

    useEffect(()=>{
        const funcGetReservations = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getresadm/reservationsadm',{
                    withCredentials: true
                })
                setReservations(response.data)
            } catch (error) {
                console.error('Error: error get reservations', error) 
            }
        }
        funcGetReservations() 
    },[reservations])

    return (
        <>
            <section className="wrapper-reservationsAdm-main">
                <div className="reservationsAdm">
                    {
                        reservations.map(reservation => {
                            return (
                                <ResAdmItem
                                    reservation={reservation}
                                    setReservations={setReservations}
                                    key={reservation._id}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

function ResAdmItem ({reservation, key, setReservations}) {

    const funcAcceptReservation = async () => {
        try {

            const response = await axios.patch('http://localhost:5001/api/acceptreservation/accept',
                {
                    reservationId: reservation._id
                },
                {
                    headers:{
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            )
            setReservations(prevReservations => {
                return prevReservations.map(res => res._id === reservation.id ? response.data : res)
            })

        } catch (error) {
            console.error('Error: accept reservation adm front', error)
        }
    }

    return (
        <>
            <div key={key} className="wrapper-reservationAdm-item">
                <div className="reservationAdm-item">
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
                                                Date: {reservation.date}
                                            </h3>
                                            <h3 className="reservationDate__time-h3">
                                                Time: {reservation.time}
                                            </h3>    
                                        </div>
                                        <div className="reservation-email">
                                            <p className="reservation-email__p">
                                                Email: {reservation.email}
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
                                            Name: {reservation.name}
                                        </p>
                                        <p className="informationData-user__phone-p">
                                            Number Phone: {reservation.phone}
                                        </p>
                                    </div>
                                    <div className="informationData-order">
                                        <p className="informationData-order__hours-p">
                                            Number of hours: {reservation.hours}
                                        </p>
                                        <p className="informationData-order__seats-p">
                                            Number of seats: {reservation.seats}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-reservationAdm-activation">
                            <div className="reservationAdm-activation">
                                <button onClick={() => {
                                    if (reservation.status === 'In processing'){
                                        funcAcceptReservation()
                                    }
                                }} className="reservationAdm-activation__button">
                                    {
                                        reservation.status === "In processing" ? "Accept" : "Cancel"
                                    }
                                </button>
                                <p className={`${reservation.status === 'Active' ? 'activation-status_active' : 'reservationAdm-activation__p '}`}>
                                    {reservation.status}
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}