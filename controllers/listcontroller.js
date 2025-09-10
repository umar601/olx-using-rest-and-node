const list = require("../models/listmodel");


async function handlerToGetAllLists(req,res) {

    const allLists = await list.find();

    res.render("home",{allLists});
    
}

async function handlerToView(req,res) {

    let { id } = req.params;

    let viewList = await list.findById(id);

    res.render("viewlist",{viewList});

    
}


async function handlerToEdit(req,res) {

    const { id } = req.params;

    let editlist = await list.findById(id);

    res.render("editlist",{editlist});
    
}


async function handlerToUpdate(req,res) {

    let { id } = req.params;

    await list.findByIdAndUpdate(id,{
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        seller:{
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
        },
        location:{
        address:req.body.address,
        city:req.body.city
        }
    });

    res.redirect("/lists");

    
}

async function handlerToDelete(req,res) {

    let { id } = req.params;

    await list.findByIdAndDelete(id);

    res.redirect("/lists");
    
}


async function handlerToNewList(req,res) {

    res.render("newlist");
    
}

async function handlerToAddNewList(req,res) {

    let imageUrl = [];

    if(req.files && req.files.length>0){

        imageUrl = req.files.map((file)=>{

            return `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;
        })
    }


    let newlist = new list(
    {    
         title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        condition:req.body.condition,
        category:req.body.category,
        images:imageUrl,
        seller:{
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
        },
        location:{
        address:req.body.address,
        city:req.body.city
        }
    }

    )

    await newlist.save()

    res.redirect("/lists");
    
}

module.exports = {handlerToGetAllLists,handlerToView,handlerToEdit,handlerToUpdate,handlerToDelete,handlerToAddNewList,handlerToNewList};