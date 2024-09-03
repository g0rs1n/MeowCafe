import axios from "axios"
import { useState, useEffect } from "react"
import changeIcon from '../../../assets/img/icons/reservationitem-icons/pen.png'
import deleteIcon from '../../../assets/img/icons/reservationitem-icons/delete.png'
import './Reservations.scss'

export default function Reservations () {

    const [reservations, setReservations] = useState()

    const userReservation = [
        {
            id: 1,
            name: 'Jack',
            phone: '824583458304',
            reservationDate: '12.06.21',
            reservationTime: '12:00',
            hoursReservation: '4',
            seats: '3'
        },
    ]



    return (
        <>
            <section className="wrapper-reservations-main">
                <div className="reservations">
                        {
                            userReservation.map(reservation => {
                                return (
                                    <ReservationItem
                                        reservation={reservation}
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

function ReservationItem ({reservation, key}) {
    return (
        <>
            <div className="wrapper-reservation-item">
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
                                    <h3 className="reservationDate__date-h3">Date: {reservation.reservationDate}</h3>
                                    <h3 className="reservationDate__time-h3">Time: {reservation.reservationTime}</h3>
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
                                        Number of hours: {reservation.hoursReservation}
                                    </p>
                                    <p className="informationData-order__seats-p">
                                        Number of seats: {reservation.seats}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-reservationIcons">
                        <div className="reservationIcons">
                            <img className="reservationIcons__change-icon" src={changeIcon} alt="change" />
                            <img className="reservationicons__delete-icon" src={deleteIcon} alt="delete" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}