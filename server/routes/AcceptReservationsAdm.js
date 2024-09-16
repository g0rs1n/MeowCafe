import { acceptReservationsAdm } from '../controllers/AcceptReservationsAdm.js'
import {checkIsAdmin} from '../utils/checkIsAdmin.js'
import Router from 'express'

const router = new Router()

// Accept Reservation Admin
// http://localhost:5001/api/acceptreservation/accept

router.patch('/accept', checkIsAdmin, acceptReservationsAdm)

export default router