import express from 'express';
import { signin, signout } from '../controllers/users/auth/user.authentication';
import register from '../controllers/users/register/register.controller';
import checkToken from '../middleware/token'

const router = express.Router();

//TODO: Pass secured routes through checkToken
router.post('/login', signin);
router.post('/register', register);
router.get('/logout', signout);


export default router;