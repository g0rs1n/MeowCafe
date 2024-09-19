import {Router} from 'express'
import { getUserAdmVer } from '../controllers/GetMe.js'
import { checkIsAdmin } from '../utils/checkIsAdmin.js'

const router = new Router()

// Get UserAdmVer
// http://localhost:5001/api/getuseradm/user

router.get('/user', checkIsAdmin, getUserAdmVer)

export default router