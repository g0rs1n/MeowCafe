import Reservation from "../models/Reservation";

export const getReservations = async (req, res) => {

    try {
        
        const nameUser = req.body.username

        const reservations = await Reservation.find({name: nameUser})

        res.json(reservations)

    } catch (error) {
        console.error('Error: error function getReservations', error)
        res.status(500).json({
            message: 'Сервер не может обработать запрос!'
        })
    }

}