import express, { Application } from 'express';
import cors from 'cors';
import routesProfesor from '../routes/profesor';
import routesUser from '../routes/user';
import routesAlumno from '../routes/alumno';
import routesMateria from '../routes/materia';
import { Profesor } from './profesor';
import { Alumno } from './alumno';
import { User } from './user';
import { Materia } from './materia';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/profesor', routesProfesor);
        this.app.use('/api/users', routesUser);
        this.app.use('/api/alumno', routesAlumno);
        this.app.use('/api/materia', routesMateria);
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Profesor.sync()
            await User.sync();
            await Alumno.sync();
            await Materia.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;