import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Documento = sequelize.define('documento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    tipoDoc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idMateria: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, )