/* 
Import
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoDB = require('./services/db.connect');
const { mainRouter } = require('./routes/main.router');
//


/* 
Config
*/
const server = express();
const port = process.env.PORT

class ServerClass{
    init(){
        //=> Moteur de rendu
       
        server.set( 'view engine', 'html' );
        
        //=> Dossier client
        server.set( 'views', __dirname + '/www' );
        server.use( express.static(path.join(__dirname, 'www')) );

        //=> Body-parser
        server.use(bodyParser.json({limit: '10mb'}));
        server.use(bodyParser.urlencoded({ extended: true }));

        //=> Cookie-parser
        server.use(cookieParser());

        //=> Routes
        server.use('/', mainRouter);

        this.launch()
    }

    launch(){
        // Connect MongoDB
        mongoDB.initClient()
        .then( mongooseResponse => {
            // Launch server
            server.listen(port, () => console.log({ database: mongooseResponse, server: `http://localhost:${port}` }))
        })
        .catch( mongooseError => console.log(mongooseError));
    }
}
//


/* 
Start
*/
new ServerClass().init();
//