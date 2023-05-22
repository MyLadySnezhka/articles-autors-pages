const express = require('express');

const Ajv = require("ajv")

const mainRoute = require('./routes/main');
const adminRoute = require('./routes/admin');

const server = express();

server.use(express.json());

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views'); 

server.use(express.static(__dirname + '/public'));

server.use('/', mainRoute);
server.use('/admin', adminRoute);

server.use((req, res) => {
    res.statusCode = 404;
    res.render('404');
})

server.listen(3000);
console.log('Server is RUN!');




