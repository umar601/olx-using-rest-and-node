const user = require("../models/usermodel");
const { v4:uuidv4 } = require("uuid");
const {setSessionId} = require("../services/authenticate");


function handlerSignup (req,res){


    res.render("signup");

}


function handlerLogin (req,res){


    res.render("login");

}

async function handlerToSignup (req,res) {

    const {name,email,password} = req.body;

    // console.log(name,password,email);

    const newUser = new user(

        {
            name:name,
            email:email,
            password:password
        }
    )

    newUser.save();

    res.redirect("/user/login");

    
}


async function handlerToLogin(req,res) {

    const { email,password }  = req.body;

    // console.log(email,password)

    let validUser = await user.findOne({email,password});

    // console.log(validUser);

    if(!validUser){

        res.redirect("/user/login");
    }

    let sessionId = uuidv4();

    setSessionId(validUser._id,sessionId);
    
    res.cookie("uuid",sessionId);

    res.redirect("/lists");

    
}



module.exports = {handlerToSignup,handlerToLogin,handlerSignup,handlerLogin};