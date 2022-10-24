import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { Alumno } from '../models/alumno';
import jwt from 'jsonwebtoken';

export const newAlumno = async (req: Request, res: Response) => {

    const { correoInstitucional, password, nombre, apellidoP } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const alumno = await Alumno.findOne({ where: { correoInstitucional: correoInstitucional } });

    if(alumno) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${correoInstitucional}`
        })
    } 
 
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        // Guardarmos usuario en la base de datos
        await Alumno.create({
            correoInstitucional: correoInstitucional,
            password: hashedPassword,
            nombre: nombre,
            apellidoP: apellidoP
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

export const loginAlumno = async (req: Request, res: Response) => {

    const { correoInstitucional, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   const alumno: any = await Alumno.findOne({ where: { correoInstitucional: correoInstitucional } });

   if(!alumno) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${correoInstitucional} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, alumno.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Generamos token
   const token = jwt.sign({
    correoInstitucional: correoInstitucional
   }, process.env.SECRET_KEY || 'pepito123');
   
   res.json(token);
}

export const getAllAlumnos = async (req: Request, res: Response) => {
    const listAlumnos = await Alumno.findAll()

    res.json(listAlumnos)
} 