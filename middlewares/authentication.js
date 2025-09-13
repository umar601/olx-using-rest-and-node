
const {getSessionId} = require("../services/authenticate");

async function restictToLoginUsers(req, res, next) {

  let token = req.cookies.token;

  // console.log(token);

  if (!token) {
   
    return res.redirect("/user/login");
  }

  const user = getSessionId(token);

  if (!user) {

    return res.redirect("/user/login");
  }

  req.user = user;

  console.log(req.user);
  
  next();
}


function authorizeUser (roles){

  return function (req,res,next){


    // console.log("role",req.user.role);

    if(!req.user){

      console.log("user not found")
      return res.redirect("/user/login");
  
    }

    const role = req.user.role;

    // console.log(roles[0]);

    if(!roles.includes(role.toString())){
      
      console.log("role not found")
      return res.end("unauthorised");
    }

    next();

  }
}


module.exports = { restictToLoginUsers,authorizeUser };

