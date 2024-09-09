import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { getDeletedReservations } from "../controllers/GetDeletedReservations.js";

const router = new Router()

// Get Deleted Reservations
// http://localhost:5001/api/getDeletedReservation/deleted

router.get('/deleted', checkAuth, getDeletedReservations)

export default router