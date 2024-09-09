import Reservation from "../models/Reservation.js";

export const getReservations = async (req, res) => {

    try {
        
        const UserEmail = req.query.userEmail

        const reservations = await Reservation.find({email: UserEmail})

        if (!reservations) {
            return res.status(500).json({
                message: "Не удалось найти резервации!"
            })
        }

        res.json(reservations)

    } catch (error) {
        console.error('Error: error function getReservations', error)
        res.status(500).json({
            message: 'Сервер не может обработать запрос!'
        })
    }

}