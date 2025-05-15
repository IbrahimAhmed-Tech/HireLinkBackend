const mongoose = require("mongoose");

const connectMongoDB = (http, port) => {
    const mongoString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/hirelinkdb?retryWrites=true&w=majority`;

    mongoose.connect(mongoString)
        .then(() => {
            console.log("Connected to the database successfully!");
            http.listen(port, () => {
                console.log(`Backend is running on port ${port}`);
            });
        })
        .catch((error) => {
            console.error("Error connecting to the database:", error);
        });
};

module.exports = { connectMongoDB };
