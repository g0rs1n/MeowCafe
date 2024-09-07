import { Router } from "express"
import { deleteReservation } from "../controllers/DeleteReservation.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

// Delete Reservation
//http://localhost:5001/api/deleteReservation/delete

router.delete('/delete', checkAuth, deleteReservation)

export default router