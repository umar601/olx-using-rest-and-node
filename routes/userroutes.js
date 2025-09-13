const express = require("express");

const userRoute = express.Router();

const { handlerToSignup,handlerToLogin,handlerSignup,handlerLogin,handlerToLogOut} = require("../controllers/usercontroller");




userRoute.get("/signup",handlerSignup);

userRoute.get("/login",handlerLogin);

userRoute.post("/signup",handlerToSignup);

userRoute.post("/login",handlerToLogin);

userRoute.get("/logout",handlerToLogOut);



module.exports = userRoute;