const Reservas = require('../model/reservas');

exports.obtener = async (req,res)=>{
    try {
        const reservas_ =await Reservas.find();
        res.status(200).json(reservas_);
    } catch (error) {
        res.status(500).json(error);
    }
}