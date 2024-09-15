import "./Reservation.scss"
import { useState } from "react"
import axios from "axios"
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css';
import "react-datepicker/dist/react-datepicker.css"

export function Reservation () {

    const [reservationData, setReservationData] = useState({})
    const [startDate, setStartDate] = useState(new Date())
    const [time, setTime] = useState('')

    const handleChange = (e) => {
        setReservationData({
            ...reservationData,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (date) => {
        setStartDate(date)
        setReservationData({
            ...reservationData,
            reservationDate: date
        })
    }

    const handleTimeChange = (time) => {
        setTime(time)
        setReservationData({
            ...reservationData,
            reservationTime: time
        })
    }

    const handleSubmit = () => {
        const funcSubmitReservation = async () => {
            try {
                const response = await axios.post('http://localhost:5001/api/reser/reservation', reservationData,  
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })

                if (response.status === 200){
                    alert('Ваш заказ зарезервирован успешно!')
                    setReservationData({})
                    setStartDate('')
                    setTime('')
                } else {
                    console.error('Error: api submit reservation form',)
                }

            } catch (error) {
                console.error('Error: api submit reservation form', error)
            }
        }
        funcSubmitReservation()
    }

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
                                handleSubmit()
                            }} className="reservation-form">
                                <label htmlFor="username">Your name:</label>
                                <input value={reservationData.name || ''} className="form-input__name" name="name" type="text" id="username"
                                    onChange={handleChange}
                                />
                                <label htmlFor="useremail">Your email (Please enter your email is the same as for registration):</label>
                                <input value={reservationData.email || ''} className="form-input__email" name="email" type="text" id="useremail"
                                    onChange={handleChange}
                                />
                                <label htmlFor="userphone">Your number phone:</label>
                                <input value={reservationData.phone || ''} className="form-input__phone" name="phone" type="text" id="userphone" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="reservationDate">Enter reservation date</label>
                                <DatePicker selected={startDate} onChange={handleDateChange}/>
                                <label htmlFor="reservationTime">What time do you reserve your place for?</label>
                                <TimePicker value={time} onChange={handleTimeChange} disableClock={true}/>
                                <label htmlFor="numberHours">For how many hours of reservation?(Number)</label>
                                <input value={reservationData.numberHours || ''} className="form-input__hours" name="numberHours" type="text" id="numberHours" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="numberSeats">How many seats?(Number)</label>
                                <input value={reservationData.numberSeats || ''} className="form-input__seats" name="numberSeats" type="text" id="numberSeats" 
                                    onChange={handleChange}
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