import "./Reservation.scss"
import { useState } from "react"
import axios from "axios"

export function Reservation () {

    const [reservationData, setReservationData] = useState({})

    const handleChange = (e) => {
        setReservationData({
            ...reservationData,
            [e.target.name]: e.target.value
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
                                <input className="form-input__name" name="name" type="text" id="username"
                                    onChange={handleChange}
                                />
                                <label htmlFor="useremail">Your email (Please enter your email is the same as for registration):</label>
                                <input className="form-input__email" name="email" type="text" id="useremail"
                                    onChange={handleChange}
                                />
                                <label htmlFor="userphone">Your number phone:</label>
                                <input className="form-input__phone" name="phone" type="text" id="userphone" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="reservationDate">Enter reservation date</label>
                                <input className="form-input__date" name="reservationDate" type="text" id="reservationDate" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="reservationTime">What time do you reserve your place for?</label>
                                <input className="form-input__time" name="reservationTime" type="text" id="reservationTime" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="numberHours">For how many hours of reservation?</label>
                                <input className="form-input__hours" name="numberHours" type="text" id="numberHours" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="numberSeats">How many seats?</label>
                                <input className="form-input__seats" name="numberSeats" type="text" id="numberSeats" 
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