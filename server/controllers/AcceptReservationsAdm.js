import Reservation from '../models/Reservation.js'

export const acceptReservationsAdm = async (req,res) => {
    try {

        const reservationId = req.body.reservationId

        const updateReservation = await Reservation.findByIdAndUpdate(reservationId,{
            status: 'Active'
        },{
            new: true,
            runValidators: true
        })

        if (!updateReservation){
            return res.status(500).json({
                message: "Не удалось изменить статус!"
            })
        }

        res.json(updateReservation)
        
    } catch (error) {
        console.error('Error: accept Reservations Adm back', error)
    }
}