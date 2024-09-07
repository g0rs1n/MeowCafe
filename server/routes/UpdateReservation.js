import {Router} from 'express'
import { updateReservation } from '../controllers/UpdateReservations.js'
import {checkAuth} from '../utils/checkAuth.js'

const router = new Router()

// Update Reservation
// http://localhost:5001/api/updatereservation/reservation

router.patch('/reservation', checkAuth, updateReservation)

export default router