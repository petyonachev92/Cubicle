const express = require('express');
const handlebars = require('express-handlebars');

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app.engine('.hbs', handlebars({
        extname: '.hbs',
        /*defaultLayout: 'main', 
        layoutsDir: './views/layouts/',
        partialsDir: './views/partials/'*/
    }))
    app.set('view engine', '.hbs')

    //TODO: Setup the body parser
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    //TODO: Setup the static files
    app.use('/static', express.static('static'))

};