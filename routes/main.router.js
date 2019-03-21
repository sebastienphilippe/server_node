/*
Imports
*/
    // Nodejs
    const { Router } = require('express');
//

/* 
Passport Strategy
Passport est un module NPM qui permet de sécuriser les connexions utilisateur grâce à des stratégies spécifiques. Nous utilisons ici la startégie JWT (cf. setAuthentication)
*/
    /* const passport = require('passport');
    const { setAuthentication } = require('../services/authentication');
    setAuthentication(passport); */
//

/* 
Definition des router
*/  
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();
//

/* 
Définition des routes
*/
    mainRouter.use( '/api', apiRouter );
//

/* 
Export
*/
    module.exports = {mainRouter};
//	