import {Router} from 'express'
import { register, login } from '../controllers/Auth.js'

const router = new Router()

// Registration
// http://localhost:5001/api/auth/register

router.post('/register', register)

// Log In
// http://localhost:5001/api/auth/login

router.post('/login', login)

export default router