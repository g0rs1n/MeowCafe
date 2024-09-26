import {Router} from 'express'
import { initialInformationAdm } from '../controllers/InitialInformationAdm.js'
import {checkIsAdmin} from '../utils/checkIsAdmin.js'

const router = new Router()

// InitialInformationAdm
//http://localhost:5001/api/initialInfo/information

router.post('/information', checkIsAdmin, initialInformationAdm)

export default router