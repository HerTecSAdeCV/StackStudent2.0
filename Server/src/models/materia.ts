import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Materia = sequelize.define('materia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreMateria: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuatrimestre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profesor: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, )