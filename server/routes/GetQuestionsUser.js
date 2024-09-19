import { Router } from "express";
import { getQuestionsUser } from "../controllers/GetQuestionsUser.js";
import {checkAuth} from '../utils/checkAuth.js'

const router = new Router()

// Get Questions User
// http://localhost:5001/api/getquestionsuser/questionsuser

router.get('/questionsuser', checkAuth, getQuestionsUser)

export default router