import express from 'express';
const router = express.Router();

import {requireSignin, isAdmin, isAuth, getUserById} from '../controllers/auth';
import {getUser, updateUser} from '../controllers/user';


router.get('/:userId', requireSignin, isAuth, getUser);
router.put('/:userId', requireSignin, isAuth, updateUser);

router.param('userId', getUserById);

export default router;