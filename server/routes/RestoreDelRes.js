import {Router} from 'express'
import {checkAuth} from '../utils/checkAuth.js'
import { resetDeletedReservations } from '../controllers/ResetDeletedReservations.js'

const router = new Router()

// Restore Deleted Reservations
// http://localhost:5001/api/restoreDelRes/restore

router.delete('/restore', checkAuth, resetDeletedReservations)

export default router