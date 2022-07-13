import { Router } from 'express';
import { getUserData, postNewUser } from '../controllers/api-cons.js';

const router = Router();

// Operations with direct database
router.get("/get_user", getUserData); // GET
router.post("/new_user", postNewUser)

export default router;