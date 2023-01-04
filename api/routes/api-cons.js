import { Router } from 'express';
import { postNewUser, postFindLoginUser, postFindUser, postImage, postBanner, postGetProfile, postFriendRequest, debug } from '../controllers/api-cons.js';

const router = Router();

// Operations with direct database
router.post("/new_user", postNewUser);
router.post("/findLoginUser", postFindLoginUser);
router.post("/findUser", postFindUser); // This should be renamed to search (returns more than 1 result)
router.post("/newProfilePic", postImage);
router.post("/newBannerPic", postBanner);
router.post("/findProfile", postGetProfile); // not to be confused with the find users used in search (returns a single result)
router.post("/addFriend", postFriendRequest);

// Used for debugging
router.post("/debug", debug);

export default router;