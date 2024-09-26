import {Router} from 'express'
import { updateStatusInfAdm } from '../controllers/UpdateStatusInfAdm.js'
import { checkIsAdmin } from '../utils/checkIsAdmin.js'

const router = new Router()

// Update Status Inf Adm
// http://localhost:5001/api/updatestatusinfadm/status

router.patch('/status', checkIsAdmin, updateStatusInfAdm)

export default router