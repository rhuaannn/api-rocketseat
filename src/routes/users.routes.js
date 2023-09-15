const { Router  } = require("express");

const usersRoutes = Router();
const UsersController = require("../controllers/UsersController");



function myMiddleware(req, res, next){
    console.log("bateu aqui")
    if(!req.body.isAdmin){
        return res.json({message: "user unauthorized"})
    }
    next()
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;
