import DeletedReservations from "../models/DeletedReservations.js";

export const getDeletedReservations = async (req, res) => {

    try {
        
        const userEmail = req.query.userEmail

        const deletedReservations = await DeletedReservations.find({email: userEmail})

        if (!deletedReservations) {
            return res.status(500).json({
                message: "Не удалось получить удаленные резервации!"
            })
        }

        res.json(deletedReservations)

    } catch (error) {
        console.error('Error: getDeletedReservations back', error)
    }

}

