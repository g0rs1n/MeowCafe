import { Router } from "express"
import { getInformation } from "../controllers/GetInformation.js"
import {checkIsAdmin} from '../utils/checkIsAdmin.js'

const router = new Router()

// Get Information Admin
//http://localhost:5001/api/getinformationadm/information

router.get('/information', checkIsAdmin, getInformation)

export default router