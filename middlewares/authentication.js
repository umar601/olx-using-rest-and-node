
const {getSessionId} = require("../services/authenticate");

async function restictToLoginUsers(req, res, next) {

  let sessionId = req.cookies.uuid;

  if (!sessionId) {
   
    return res.redirect("/user/login");
  }

  const user = await getSessionId(sessionId);

  if (!user) {

    return res.redirect("/user/login");
  }

  req.user = user;
  
  next();
}


module.exports = restictToLoginUsers;

