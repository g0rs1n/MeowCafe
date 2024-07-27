import { Router } from "express";
import { reservation } from "../controllers/Reservation.js"

const router = new Router()

// Reservation
//http://localhost:5001/api/reservation

router.post('/reservation', reservation)

export default router