import mongoose from "mongoose"

export default async function connectDB(){
    mongoose.connect("mongodb+srv://lorapine:ndbn1901@cluster0.6xej9.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}