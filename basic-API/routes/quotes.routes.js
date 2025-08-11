const express = require('express');

const quotesConroller = require('../controllers/quotes.controller')

const router = express.Router();

router.get('/', quotesConroller.getRandomQuote)

module.exports = router;