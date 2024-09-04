import {Router} from 'express'
import {getReservations} from '../controllers/GetReservations.js'
import {checkAuth} from '../utils/checkAuth.js'

const router = new Router()

// Get Reservations
// http://localhost:5001/api/getreservations/reservations

router.get('/reservations', checkAuth, getReservations)

export default router