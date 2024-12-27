import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const con=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected : ${con.connection.host}`);
    }
    catch(error)
    {
        console.log(`MongoDB connection error :`,error);

    }
};