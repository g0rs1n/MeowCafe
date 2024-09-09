import Reservation from "../models/Reservation.js"
import DeletedReservations from "../models/DeletedReservations.js"

export const deleteReservation = async (req, res) => {
    try {
        
        const { reservationId } = req.query

        const deletedReservation = await Reservation.findByIdAndDelete(reservationId)

        if (!deletedReservation) {
            return res.status(500).json({
                message: 'Не удалось удалить резервацию!'
            })
        }

        const deleteReservations = await DeletedReservations.create({
                ...deletedReservation._doc
            })

        res.json({
            message: 'Резервация успешно удалена!',
            id: reservationId,
            deleteReservation: deleteReservations
        })

    } catch (error) {
        console.error('Error: error deleteReservation back', error)
    }
}