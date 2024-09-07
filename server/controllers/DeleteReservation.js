import Reservation from "../models/Reservation.js"

export const deleteReservation = async (req, res) => {
    try {
        
        const { reservationId } = req.query

        const deletedReservation = await Reservation.findByIdAndDelete(reservationId)

        if (!deletedReservation) {
            return res.status(500).json({
                message: 'Не удалось удалить резервацию!'
            })
        }

        res.json({
            message: 'Резервация успешно удалена!',
            id: reservationId
        })

    } catch (error) {
        console.error('Error: error deleteReservation back', error)
    }
}