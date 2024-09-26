import {Router} from 'express'
import { updateInformationAdm } from '../controllers/UpdateInformationAdm.js'
import { checkIsAdmin } from '../utils/checkIsAdmin.js'

const router = new Router()

// Update Information Adm
// http://localhost:5001/api/updateinformationadm/information

router.patch('/information', checkIsAdmin, updateInformationAdm)

export default router