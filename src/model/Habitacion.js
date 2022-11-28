const { Schema, model } = require("mongoose");

const habitacionSchema = new Schema({
    _id: Number,
    nombre: String,
    capacidad: Number,
    descripcion: String,
    wifi: Boolean,
    tv: Boolean,
    banio: Boolean,
    cajaFuerte: Boolean,
    Nevera: Boolean,
    valorNoche: Number,
    img: String,
    estado: String,
    reservas: 
        [{
            type: Schema.Types.ObjectId,
            ref: "Reservas"
        }]
});

module.exports = model("Habitacion",habitacionSchema);
