import Reservation from "../models/Reservation.js"

export const getReservationsAdm = async (req,res) => {
    try {
        
        const reservations = await Reservation.find()

        if (!reservations){
            return res.status(500).json({
                message: "Не удалось получить резервации!"
            })
        }

        res.json(reservations)

    } catch (error) {
        console.error('Error: getReservationsAdm back',error)
    }
}