import { Router } from 'express';
import { loginUser, newUser } from '../controllers/user';

const router = Router();

router.post('/', newUser);
router.post('/loginAd', loginUser)

export default router;