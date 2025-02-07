import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://estebanquito409:XJaBWgMKpFy9ktZM@cluster0.xbkovdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
    }
}