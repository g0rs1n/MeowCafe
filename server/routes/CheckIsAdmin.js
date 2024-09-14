import {Router} from 'express'
import { checkIsAdmin } from '../controllers/CheckIsAdmin.js'

const router = new Router()

// Check Is Admin
// http://localhost:5001/api/checkadmin/admin

router.get('/admin', checkIsAdmin)

export default router