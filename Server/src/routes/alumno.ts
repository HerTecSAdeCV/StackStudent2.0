import { Router } from 'express';
import { loginAlumno, newAlumno, getAllAlumnos } from '../controllers/alumno';

const router = Router();

router.post('/', newAlumno);
router.post('/loginA', loginAlumno);
router.get('/dashboard/ListAlumnos', getAllAlumnos);

export default router;