/*
Imports & configuration
*/
  // Class
  const express = require('express');
  const authRouter = express.Router({ mergeParams: true });

  // Modules
  const { register, login } = require('./auth.controller');
  const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
  const { checkFields } = require('../../services/request.checker');
// 


/*
Class definition
*/
  class AuthRouterClass {

    constructor() {}

    // Définition des routes
    routes(){

      // Route USER register
      authRouter.post('/register', (req, res) => {
        // Error: no body present
        if (typeof req.body === 'undefined' || req.body === null) { return sendBodyError(res, 'No body data provided') }
        // Check fields in the body
        const { miss, extra, ok } = checkFields(['nick_name' , 'email', 'password'], req.body);
        //=> Error: bad fields
        if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
        // Request is OK
        register(req.body)
        .then( apiRes =>  sendApiSuccessResponse(res, 'User is registrated', apiRes))
        .catch( apiErr => sendApiErrorResponse(res, 'Error during user registration', apiErr));
      })

      // Route USER login
      authRouter.post('/login', (req, res) => {
        
        // Error: no body present
        if (typeof req.body === 'undefined' || req.body === null) { return sendBodyError(res, 'No body data provided') }
        // Check fields in the body
        const { miss, extra, ok } = checkFields(['email', 'password'], req.body);
        //=> Error: bad fields
        if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
        // Request is OK
        login(req.body, res)
        .then( apiRes =>  sendApiSuccessResponse(res, 'User is logged in', apiRes) )
        .catch( apiErr => sendApiErrorResponse(res, 'Error during user login', apiErr));
      })
    };

    // Initialize routes
    init(){
      this.routes();
      return authRouter;
    }
  }
//


/*
Export class
*/
  module.exports = AuthRouterClass;
//
