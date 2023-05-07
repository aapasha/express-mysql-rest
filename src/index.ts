import express = require('express');
// import mysql = require('mysql');
import dotenv = require('dotenv');
import config = require('config');
import app from './app';


const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') dotenv.config();

const PORT = config.get('PORT');

app.listen(PORT, () => console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`));

// const app = express();

// const db = mysql.createConnection({
//     user: 'root',
//     password: 'root123',
//     host: '127.0.0.1',
//     database: 'dailyquote',
// });

// app.get('/select', (req, res) => {
//     db.query(
//         'SELECT * FROM quotes',
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             res.send(result);
//         }
//     );
// });

// app.get('/insert', (req, res) => {
    
//     const quote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo risus quis imperdiet mattis. Morbi semper ante eu maximus accumsan. Sed at tellus facilisis, tempus sapien ut, vehicula sapien.';
//     const author = 'some guy';

//     db.query(
//         'INSERT INTO quotes (quote, author) VALUES (?, ?)',
//         [quote, author],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             res.send(result);
//         }
//     );
// });

// app.listen(3001, () => {
//     console.log('server running');
// });
