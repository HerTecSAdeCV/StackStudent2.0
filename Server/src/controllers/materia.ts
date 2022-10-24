import { Request, Response} from 'express';
import { Materia } from '../models/materia';

export const postMateria = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Materia.create(body);

        res.json({
            msg: `La Materia fue agregada con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const getMaterias = async (req: Request, res: Response) => {
    const listMaterias = await Materia.findAll()

    console.log(listMaterias);
    res.json(listMaterias)
}