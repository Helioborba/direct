import { Router } from 'express';
import { postNewUser, postFindUser } from '../controllers/api-cons.js';

const router = Router();

// Operations with direct database
router.post("/new_user", postNewUser)
router.post("/findUser", postFindUser)

export default router;