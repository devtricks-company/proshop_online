import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`mongodb is connected... to ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log('mongodb is NOT connected.'.red.underline.bold);
        process.exit(1);
    }
}

