import { Router } from 'express';
import { postMateria, getMaterias } from '../controllers/materia';

const router = Router();

router.post('/', postMateria);
router.get('/', getMaterias);

export default router;