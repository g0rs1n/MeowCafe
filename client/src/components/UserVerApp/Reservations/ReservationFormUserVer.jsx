import axios from "axios"
import { useState } from "react"
import {useNavigate} from 'react-router-dom' 

export default function ReservationFormUserVer ({addRes, setAddRes}) {

    const [userReservation, setUserReservation] = useState({})

    const navigate = useNavigate()

    const handleChangeUserReservation = (e) => {
        setUserReservation({
            ...userReservation,
            [e.target.name]: e.target.value
        })
    }

    const handleClickEscape = () => {
        setAddRes(!addRes)
    }

    const handleSubmit = () => {
        const funcSubmitReservation = async () => {
            try {
                const response = await axios.post('http://localhost:5001/api/reser/reservation', userReservation, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (response.status === 200){
                    alert('Ваш заказ зарезервирован успешно!')
                    setAddRes(!addRes)
                    navigate('/app/reservations')
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
            <div className="reservation-form-wrapper form-userver">
                <div className="form-userver-title">
                    <h2 className="form-userver-title__h2">Make your reservation</h2>
                </div>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    handleSubmit()
                }} className="reservation-form">
                        <div onClick={handleClickEscape} className="reservation-form__click"></div>
                        <label htmlFor="username">Your name:</label>
                        <input className="form-input__name" name="name" type="text" id="username"
                            onChange={handleChangeUserReservation}
                        />
                        <label htmlFor="useremail">Your email (Please enter your email is the same as for registration):</label>
                        <input className="form-input__email" name="email" type="text" id="useremail"
                            onChange={handleChangeUserReservation}
                        />
                        <label htmlFor="userphone">Your number phone:</label>
                        <input className="form-input__phone" name="phone" type="text" id="userphone" 
                            onChange={handleChangeUserReservation}
                        />
                        <label htmlFor="reservationDate">Enter reservation date</label>
                        <input className="form-input__date" name="reservationDate" type="text" id="reservationDate" 
                            onChange={handleChangeUserReservation}
                        />
                        <label htmlFor="reservationTime">What time do you reserve your place for?</label>
                        <input className="form-input__time" name="reservationTime" type="text" id="reservationTime" 
                            onChange={handleChangeUserReservation}
                        />
                        <label htmlFor="numberHours">For how many hours of reservation?</label>
                        <input className="form-input__hours" name="numberHours" type="text" id="numberHours" 
                            onChange={handleChangeUserReservation}
                        />
                        <label htmlFor="numberSeats">How many seats?</label>
                        <input className="form-input__seats" name="numberSeats" type="text" id="numberSeats" 
                            onChange={handleChangeUserReservation}
                        />
                        <div className="form-button-wrapper">
                            <button className="reservation-form__button" type="submit">Send</button>
                        </div>
                </form>
            </div>
        </>
    )
    
}