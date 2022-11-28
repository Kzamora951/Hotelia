const { Router } = require("express");
const rutasHabitacion = Router();
const ctrHab = require("../controller/habitacion.controller.js");

rutasHabitacion.get("/", ctrHab.obtener);
//rutasHabitacion.get("/:id", ctrHab.obtenerId);
//rutasHabitacion.post("/", ctrHab.add);
//rutasHabitacion.put("/:id", ctrHab.edit);

module.exports = rutasHabitacion;
