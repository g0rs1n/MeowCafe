import {Router} from 'express'
import { updateUser } from '../controllers/UpdateUser.js'
import {checkAuth} from '../utils/checkAuth.js'

const router = new Router()

// Update User
//http://localhost:5001/api/updateuser/upduser

router.patch('/upduser', checkAuth, updateUser)

export default router