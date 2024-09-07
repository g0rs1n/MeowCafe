import Reservation from "../models/Reservation.js";

export const getReservations = async (req, res) => {

    try {
        
        const userEmail = req.query.email

        const reservations = await Reservation.find({email: userEmail})

        res.json(reservations)

    } catch (error) {
        console.error('Error: error function getReservations', error)
        res.status(500).json({
            message: 'Сервер не может обработать запрос!'
        })
    }

}