import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { Profesor } from '../models/profesor';
import jwt from 'jsonwebtoken';

export const newProfesor = async (req: Request, res: Response) => {

    const { correoInstitucional, password } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const profesor = await Profesor.findOne({ where: { correoInstitucional: correoInstitucional } });

    if(profesor) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${correoInstitucional}`
        })
    } 
 
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        // Guardarmos usuario en la base de datos
        await Profesor.create({
            correoInstitucional: correoInstitucional,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${correoInstitucional} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

export const loginProfesor = async (req: Request, res: Response) => {

    const { correoInstitucional, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   const profesor: any = await Profesor.findOne({ where: { correoInstitucional: correoInstitucional } });

   if(!profesor) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${correoInstitucional} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, profesor.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   const datosProfesor = await Profesor.findAll();

   // Generamos token
   const token = jwt.sign({
    correoInstitucional: correoInstitucional
   }, process.env.SECRET_KEY || 'pepito123');
   
   res.json(token);
}

export const getAllProfesores = async (req: Request, res: Response) => {
    const listProfesores = await Profesor.findAll()

    res.json(listProfesores)
} 