import express = require('express');
import { getQuotes, addQuote, getRandomQuote } from '../controllers/api.controller'

const router = express.Router();
// const jsonParser = bodyParser.json();


// Endpoint for getting all the records
router.get('/get', getQuotes);

// Endpoint for getting random record
router.get('/get/random', getRandomQuote)

// Endpoint for creating a new record
router.post('/new', addQuote);

export default router;
