import Reservation from '../models/Reservation.js'

// Reservation 

export const reservation = async (req, res) => {
    try {
        const {name, phone, reservationTime, numberHours, numberSeats} = req.body

        const newReservation = new Reservation({
            name: name,
            phone: phone,
            reservationTime: reservationTime,
            numberHours: numberHours,
            numberSeats: numberSeats,
        })

        await newReservation.save()

        res.json({
            message: "Резервация прошла успешно!"
        })

    } catch (error) {
        console.error('Error: reservation', error)
    }
}