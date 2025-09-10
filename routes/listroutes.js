const express = require("express");

const upload = require("../middlewares/uploads");

const router = express.Router();

const {handlerToGetAllLists,handlerToView,handlerToEdit,handlerToUpdate,handlerToDelete,handlerToAddNewList,handlerToNewList} = require("../controllers/listcontroller");

router.route("/")
.get(handlerToGetAllLists);


router.get("/view/:id",handlerToView);

router.get("/edit/:id",handlerToEdit)

router.patch("/:id",handlerToUpdate);

router.delete("/:id",handlerToDelete);

router.get("/new",handlerToNewList);

router.post("/",upload.array("images",10),handlerToAddNewList);


module.exports = router;