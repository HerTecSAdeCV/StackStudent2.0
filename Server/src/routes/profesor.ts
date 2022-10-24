import { Router } from 'express';
import { newProfesor, loginProfesor , getAllProfesores } from '../controllers/profesor';

const router = Router();

router.post('/', newProfesor);
router.post('/loginP', loginProfesor);
router.get('/dashboard/ListProfesores', getAllProfesores);

export default router;