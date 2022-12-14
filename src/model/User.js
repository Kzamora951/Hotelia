const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    _id:Number,
    tipoDoc:String,
    nombre:String,
    apellido:String,
    fnacimiento:Date,
    genero:String,
    email: {type: String , Require: true, unique: true},
    telefono:Number,
    pais:String,
    Password:String,
    TipoUser:String,
    img:String,

    reservas: 
        [{
            type: Schema.Types.ObjectId,
            ref: "Reservas"
        }]
});

module.exports = model("User",UserSchema);