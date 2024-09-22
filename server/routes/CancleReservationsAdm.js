import { cancleReservationsAdm } from '../controllers/CancleReservationsAdm.js'
import {checkIsAdmin} from '../utils/checkIsAdmin.js'
import Router from 'express'

const router = new Router()

// Accept Reservation Admin
// http://localhost:5001/api/canclereservation/cancle

router.patch('/cancle', checkIsAdmin, cancleReservationsAdm)

export default router