const express = require("express");
const Controller = require("./controller");
const { post } = require("./network");

const router = express.Router();

function addUser(req, res) {
    const {auth} = req;
    const {
        email,
        password,
        displayName
    } = req.body;


    Controller.main({
        auth,
        email,
        password,
        displayName
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

function getUser(req, res){
    const {auth} = req;
    const {email} = req.body;
    Controller.getUser({
        auth,
        email
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

function updateUser(req, res){
    const {auth} = req;
    const {uid} = req;
    const {
        password,
        displayName
    } = req.body;
   
    Controller.updateUser({
        password,
        displayName
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

/*  /users post = AGREGAR
    /users patch  = ACTUALIZAR
    /users delete = ELIMINAR
    /users get = OBTENER
*/

router.post("/", addUser)
router.get("/get-user", getUser)
router.patch("/", updateUser)

module.exports = router