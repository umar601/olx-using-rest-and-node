let userAuthenticate = new Map();

function setSessionId(userId,sessionId){

    userAuthenticate.set(sessionId,userId);
}

function getSessionId(sessionId){

    return userAuthenticate.get(sessionId);
}

module.exports = {setSessionId,getSessionId};