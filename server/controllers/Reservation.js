import Reservation from '../models/Reservation.js'

// Reservation 

export const reservation = async (req, res) => {
    try {
        const {name, email, phone, reservationDate, reservationTime, numberHours, numberSeats} = req.body
        
        const newReservation = new Reservation({
            name: name,
            email: email,
            phone: phone,
            date: reservationDate,
            time: reservationTime,
            hours: numberHours,
            seats: numberSeats,
        })

        await newReservation.save()

        res.status(200).json({
            message: "Резервация прошла успешно!"
        })

    } catch (error) {
        console.error('Error: reservation', error)
    }
}