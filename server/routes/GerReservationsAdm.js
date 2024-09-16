import { Router } from "express";
import { getReservationsAdm } from "../controllers/GetReservationsAdm.js";
import { checkIsAdmin } from "../utils/checkIsAdmin.js";

const router = new Router()

// Get Reservations Admin
// http://localhost:5001/api/getresadm/reservationsadm

router.get('/reservationsadm', checkIsAdmin, getReservationsAdm)

export default router