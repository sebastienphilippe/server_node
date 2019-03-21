/*
Imports
*/
    // Nodejs
    const { Router } = require('express');
    const AuthRouterClass = require('./auth/auth.routes');
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

    // Child
    const authRouter = new AuthRouterClass();
//

/* 
Définition des routes
*/
    mainRouter.use( '/api', apiRouter );
    apiRouter.use('/auth', authRouter.init());
//

/* 
Export
*/
    module.exports = {mainRouter};
//