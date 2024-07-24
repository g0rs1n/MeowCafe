import {Router} from 'express'
import { register, login, getMe } from '../controllers/Auth.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

// Registration
// http://localhost:5001/api/auth/register

router.post('/register', register)

// Log In
// http://localhost:5001/api/auth/login

router.post('/login', login)

// Get Me
// http://localhost:5001/api/auth/me

router.get('/me', checkAuth, getMe)

export default router