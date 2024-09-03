import Reservation from '../models/Reservation.js'

// Reservation 

export const reservation = async (req, res) => {
    try {
        const {name, phone, reservationDate, reservationTime, numberHours, numberSeats} = req.body

        const newReservation = new Reservation({
            name: name,
            phone: phone,
            reservationDate: reservationDate,
            reservationTime: reservationTime,
            numberHours: numberHours,
            numberSeats: numberSeats,
        })

        await newReservation.save()

        res.status(200).json({
            message: "Резервация прошла успешно!"
        })

    } catch (error) {
        console.error('Error: reservation', error)
    }
}