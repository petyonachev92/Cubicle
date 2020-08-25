require('dotenv').config()
const router = require('./routes/routes');
const mongoose = require('mongoose')
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();
const indexRouter = require('./routes/routes')

require('./config/express')(app);

mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true } , (err) => {
    if (err) {
        console.log(err)
        throw err
    }

    console.log('Database is up and running!')
})

app.use('/', indexRouter)

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));