import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Profesor = sequelize.define('profesor', {
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
    }
}, )