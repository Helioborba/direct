import { Router } from 'express';
import { postNewUser, postFindLoginUser, postFindUser, postImage } from '../controllers/api-cons.js';

const router = Router();

// Operations with direct database
router.post("/new_user", postNewUser)
router.post("/findLoginUser", postFindLoginUser)
router.post("/findUser", postFindUser)
router.post("/newProfilePic", postImage)

export default router;