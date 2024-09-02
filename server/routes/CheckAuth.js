import { Router } from "express"
import { CheckAuth } from "../controllers/CheckAuth.js"

const router = new Router()

// Get Me
// http://localhost:5001/api/user/checkauth

router.get('/checkauth', CheckAuth)

export default router