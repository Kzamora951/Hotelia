const { Router } = require("express");
const rutasUser = Router();
const ctrUser = require("../controller/user.controller.js");

/*rutasUser.get("/", ctrUser.obtener);
rutasUser.get("/:id", ctrUser.obtenerId);
rutasUser.post("/", ctrUser.add);
rutasUser.put("/:id", ctrUser.edit);*/

module.exports = rutasUser;
