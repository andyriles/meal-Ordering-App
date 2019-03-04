import { Router } from "express";
import passport from 'passport';
import authController from '../controllers/authController';

const router = Router();

const requireSignIn = passport.authenticate('local', { session: false });

router.post('/signup', authController.create);
router.post('/login', requireSignIn, authController.login);

export default router;