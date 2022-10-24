import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Alumno = sequelize.define('alumno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correoInstitucional: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidoP: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, )