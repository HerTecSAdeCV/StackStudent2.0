import { Sequelize } from "sequelize";


const sequelize = new Sequelize('plataformautn', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;