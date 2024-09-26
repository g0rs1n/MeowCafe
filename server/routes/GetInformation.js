import { Router } from "express"
import { getInformation } from "../controllers/GetInformation.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

// Get Information User
//http://localhost:5001/api/getinformation/information

router.get('/information', checkAuth, getInformation)

export default router