import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database is connected'));

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "cinegharshow",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected DB:", mongoose.connection.name);
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    } 
}

export default connectDB;
