const AppError = require("../utils/AppError");


class UsersController {
    create(req, res) {
        const { name, email, password ,isAdmin} = req.body;


        if(!name){
            throw new AppError("O nome é obrigatório!")
        }
        res.status(201).json({ name, email, password,isAdmin });
    }
}

module.exports = UsersController;
