import mongoose from "mongoose";

const empleadoShema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    apellido: {
        type: String,
        required: true
    },
    cedula: {
        type: Number, 
        require: true
    },
    firma: {
        type: String, 
        require: true
    },
},{timestamps: true,
    versionKey:false})

export default mongoose.model('Empleado', empleadoShema)