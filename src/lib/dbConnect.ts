import mongoose from "mongoose";

type connectionObject = {
    isConnected? : number
}


const connection: connectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log(
            "Already connected to MongoDB, skipping connection attempt."
        );
        
         return
        };

        try {
            const db = await mongoose.connect(process.env.MONGODB_URL || '')

            connection.isConnected = db.connections[0].readyState
        } catch (error) {
            console.error("Failed to connect to MongoDB:", error);
            process.exit(1)
        }
}

export default dbConnect