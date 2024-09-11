import {Router} from 'express'
import { question } from '../controllers/Question.js'
import {checkAuth} from '../utils/checkAuth.js'

const router = new Router()

// Question
//http://localhost:5001/api/question/savequestion

router.post('/savequestion', checkAuth, question)

export default router