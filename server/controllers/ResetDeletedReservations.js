import Reservation from "../models/Reservation.js"
import DeletedReservations from "../models/DeletedReservations.js"

export const resetDeletedReservations = async (req, res) => {
    try {
        
        const {deletedResId} = req.query

        const deletedReservation = await DeletedReservations.findByIdAndDelete(deletedResId)

        if (!deletedReservation) {
            return res.status(500).json({
                message: "Не удалось восстановить резервацию!"
            })
        }

        const restoredReservation = await Reservation.create({
            ...deletedReservation._doc
        })

        res.json({
            message: "Восстановление резервации прошло успешно!",
            id: deletedResId,
            restoredReservation: restoredReservation
        })

    } catch (error) {
        console.error('Error: resetDeletedReservations back', error)
    }
}