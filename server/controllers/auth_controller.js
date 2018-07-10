const users = require('../models/users');
let id = 1;

module.exports = {
    login:(req,res,next) => {
        const {session} = req;
        const {username, password} = req.body;

        const user = users.find(user => user.username === username && user.password === password);

        if(user){
            session.user.username = user.username;
            res.status(200).send(req.session);
        }else{
            res.status(500).send(Unatherized);
        }
    },
    register:(req,res,next) => {
        const {session} = req;
        const {username, password} = req.body;

        user.push({id, username, password});
        id++;
        session.user.username = username;

        res.status(200).send(req.session);
    },
    signout:(req,res,next) => {
        const {session} = req;
        session.destroy();
        res.status(200).send(req.session);
    },
    getuser:(req,res,next) => {
        const {session} = req;
        session.destroy();
        res.status(200).send(req.session);
    }
}

