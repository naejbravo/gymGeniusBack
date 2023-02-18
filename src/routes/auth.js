import express from 'express';
import { signUp, signIn, signInWithProviderAndCreateUser } from '../controllers/auth.js';
const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signinwithprovider', signInWithProviderAndCreateUser);

export default router;