import { answerQuestionAdm } from '../controllers/AnswerQuestionAdm.js'
import {checkIsAdmin} from '../utils/checkIsAdmin.js'
import Router from 'express'

const router = new Router()

// Accept Reservation Admin
// http://localhost:5001/api/answerquestion/answer

router.patch('/answer', checkIsAdmin, answerQuestionAdm)

export default router