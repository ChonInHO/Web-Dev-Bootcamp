const express = require('express');

const db = require('./data/database')
const quoteRoutes = require('./routes/quotes.routes');

const app = express();

app.use('/quote', quoteRoutes);

app.use(function(error, req, res, next) {
    res.status(500).json({
        message: 'sth went wrong',
    });
});

db.initDb().then(function() {
    app.listen(3000);
}).catch(function(error) {
    console.log('connceting to the database failed');
});
