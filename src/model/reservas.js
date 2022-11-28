const { Schema, model } = require("mongoose");

const reservasSchema = new Schema({
    feEntrada:Date,
    seSalida:Date,
    cantidadNoches:Number,
    feReserva:Date,
    TotalReserva:Number,


    user: 
        [{
            type: Schema.Types.Number,
            ref: "User",
        }],
    habitaciones: 
        [{
            type: Schema.Types.Number,
            ref: "Habitacion"
        }]
});

module.exports = model("Reservas",reservasSchema);