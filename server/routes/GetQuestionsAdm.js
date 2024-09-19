import { Router } from "express";
import { getQuestionsAdm } from "../controllers/GetQuestionsAdm.js";
import { checkIsAdmin } from "../utils/checkIsAdmin.js";

const router = new Router()

// Get Questions Admin
// http://localhost:5001/api/getquestionsadm/questionsadm

router.get('/questionsadm', checkIsAdmin, getQuestionsAdm)

export default router