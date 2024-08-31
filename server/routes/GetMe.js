import { Router } from "express";
import { getMe } from "../controllers/GetMe.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router()

// Get Me
// http://localhost:5001/api/getme/me

router.get('/me', checkAuth, getMe)

export default router