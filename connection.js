const mongoose = require("mongoose");

const connectMongoDB = async () => {
    const mongoString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/hirelinkdb?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(mongoString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to the database successfully!");
    } catch (error) {
        console.error("❌ Error connecting to the database:", error);
    }
};

module.exports = { connectMongoDB };
