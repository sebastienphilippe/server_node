/*
Imports
*/
const JwtStrategy = require('passport-jwt').Strategy;
const UserModel = require('../models/user.model');
//

/*
Service definition
*/  
// Extract token from cookie
const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) token = req.cookies['hetic-chat'];
    return token;
};

// JWT authentication
const authJwt = (passport) => {
    // #JWT Options for passport
    const opts = {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET,
    };
    
    // #JWT strategy
    passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
        UserModel.findOne({ _id: jwtPayload._id }, (err, user) => {
            if (err) { return done(err, false)}
            if (user) { 
                return done(null, user) 
            }
            else { return done(null, false) }
        });
    }));
};
// 


/*
Export service
*/
module.exports = {
    setAuthentication: (passport) => {
        authJwt(passport);
    },
};
// 