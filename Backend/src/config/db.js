const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
        //if the database connection fails, there is no point in continuing to run the application, so we exit the process with a failure code (1).
    }
};

module.exports = connectDB;