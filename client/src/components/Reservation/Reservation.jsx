import "./Reservation.scss"
import { useState } from "react"

export function Reservation () {

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [reservationTime, setReservationTime] = useState()
    const [numberHours, setNumberHours] = useState()
    const [numberSeats, setNumberSeats] = useState()

    return (
        <>
            <div className="reservation-page-wrapper">
                <div className="container-main">
                    <div className="reservation-page">
                        <div className="reservation-page-title">
                            <h2>
                                How to reserve ?
                            </h2>
                        </div>
                        <div className="reservation-page-main">
                            <p>
                                To reserve a place in the cafe, you need to fill out the form below, after which our employee will contact you within 5-10 minutes to confirm or reschedule your reservation. If you want to see current level standards and available seats, and also track your order online, then register in your personal account!
                            </p>
                        </div>
                        <div className="reservation-form-wrapper">
                            <form onSubmit={(e)=>{
                                e.preventDefault()

                            }} className="reservation-form">
                                <label htmlFor="username">Your name:</label>
                                <input className="form-input__name" type="text" id="username"
                                    value={name} onChange={(e)=> {
                                        setName(e.target.value)
                                    }} 
                                />
                                <label htmlFor="userphone">Your number phone:</label>
                                <input className="form-input__phone" type="text" id="userphone" 
                                    value={phone} onChange={(e)=> {
                                        setPhone(e.target.value)
                                    }}
                                />
                                <label htmlFor="reservationTime">What time do you reserve your place for?</label>
                                <input className="form-input__time" type="text" id="reservationTime" 
                                    value={reservationTime} onChange={(e)=> {
                                        setReservationTime(e.target.value)
                                    }}
                                />
                                <label htmlFor="numberHours">For how many hours of reservation?</label>
                                <input className="form-input__hours" type="text" id="numberHours" 
                                    value={numberHours} onChange={(e)=>{
                                        setNumberHours(e.target.value)
                                    }}
                                />
                                <label htmlFor="numberSeats">How many seats?</label>
                                <input className="form-input__seats" type="text" id="numberSeats" 
                                    value={numberSeats} onChange={(e)=>{
                                        setNumberSeats(e.target.value)
                                    }}
                                />
                                <div className="form-button-wrapper">
                                    <button className="reservation-form__button" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}