import mysql = require('mysql2/promise');
import config = require('config');
import { PoolOptions } from 'mysql2';

const DB_HOST: string = config.get('DB_HOST');
const DB_PORT: number = config.get('DB_PORT');
const DB_NAME: string = config.get('DB_NAME');
const DB_USERNAME: string = config.get('DB_USERNAME');
const DB_USERNAME_PASSWORD: string = config.get('DB_USERNAME_PASSWORD');

const connectOptions: PoolOptions = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_USERNAME_PASSWORD,
};

const pool = mysql.createPool(connectOptions);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();
        console.log('MySQL database connected');
    } catch (err) {
        console.log('MySQL database connection error: ', err);
        process.exit(1);
    }
};

connectToMySQL().then();

export default pool;
