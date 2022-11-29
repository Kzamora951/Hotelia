const { Router } = require("express");
const rutasReserva = Router();
const ctrRou = require("../controller/reserva.controller.js");

rutasReserva.get("/", ctrRou.obtener);
/*rutasReserva.get("/:id", ctrRou.obtenerId);
rutasReserva.post("/", ctrRou.add);
rutasReserva.put("/:id", ctrRou.edit);*/


module.exports = rutasReserva;
