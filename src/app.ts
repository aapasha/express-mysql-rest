import express = require('express');
import cors = require('cors');

import router from './routers/api.router';

require('./database/mysql.db');

const app = express();

// const NODE_ENV = process.env.NODE_ENV || 'development';
// 
// const whitelist = [];
// 
// const corsOptions = {
//     origin: (origin = '', callback) => {
//         if (whitelist.indexOf(origin) !== -1) callback(null, true);
//         else callback(new Error('Not allowed by CORS'));
//     },
//     methods: ['GET, POST'],
//     allowedHeders: ['Content-Type'],
// };

// app.use(NODE_ENV === 'development' ? cors() : cors(corsOptions));

app.use(cors());

app.get('/', (req, res) => res.send());

app.use(express.json());
app.use('/api', router);

export default app;
