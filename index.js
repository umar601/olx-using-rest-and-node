const express = require("express");

const getConnection = require("./connection");

const router = require("./routes/listroutes");

const middlewares = require("./middlewares/middleware");


const port = 8080;

const app = express();

const url = "mongodb://127.0.0.1:27017/olx";

getConnection(url)
.then(()=>{
    
    console.log("Connection with database is setup successfully");
})
.catch((err)=>{

    console.log(err);
})

middlewares(app);

app.use("/lists",router);

app.listen(port,()=>{
    
    console.log(`Server is listening at port ${port}`);
})




