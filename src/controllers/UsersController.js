class UsersController {
    create(req, res) {
        const { name, email, password ,isAdmin} = req.body;
        res.status(201).json({ name, email, password,isAdmin });
    }
}

module.exports = UsersController;
