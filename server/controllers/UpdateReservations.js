import Reservation from '../models/Reservation.js'

export const updateReservation = async (req,res) => {
    try {
        
        const newDataReservation = req.body.newReservation
        const reservationId = req.body.reservationId

        const reservationData = await Reservation.findByIdAndUpdate(reservationId,newDataReservation,{
            new: true,
            runValidators: true
        })

        if (!reservationData) {
            return res.status(500).json({
                message: 'Не удалось обновить данные резервации!'
            })
        }

        res.json(reservationData)

    } catch (error) {
        console.error('Error: error back updateReservation', error)
    }
}
