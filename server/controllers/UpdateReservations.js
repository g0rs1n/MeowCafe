import Reservation from '../models/Reservation.js'
import jwt from 'jsonwebtoken'

export const updateReservation = async (req,res) => {
    try {
        
        const newDataReservation = req.body
        
        const token = req.cookies.token
        const decodedToken = jwt.decode(token)

        const reservationData = await Reservation.findByIdAndUpdate(decodedToken,newDataReservation,{
            new: true,
            runValidators: true
        })

        if (!reservationData) {
            res.status(500).json({
                message: 'Не удалось обновить данные резервации!'
            })
        }

        res.json(reservationData)

    } catch (error) {
        console.error('Error: error back updateReservation', error)
    }
}
