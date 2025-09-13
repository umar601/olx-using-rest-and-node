// let userAuthenticate = new Map();

const jwt = require("jsonwebtoken");

const secret = "umar123"

function setSessionId(user){

    // userAuthenticate.set(sessionId,userId);

    return jwt.sign({name:user.name,email:user.email,id:user._id,role:user.role},secret,{ expiresIn: "1h" } )
}

function getSessionId(token){

    // return userAuthenticate.get(sessionId);

    return jwt.verify(token,secret); 
}

module.exports = {setSessionId,getSessionId};