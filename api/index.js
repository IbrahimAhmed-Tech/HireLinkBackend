const app = require("../server");
const { connectMongoDB } = require("../connection");

let isConnected = false;

module.exports = async (req, res) => {
    if (!isConnected) {
        await connectMongoDB(); 
        isConnected = true;
    }
    
    return app(req, res); 
};
