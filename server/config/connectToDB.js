const mongoose = require("mongoose")
require("dotenv").config();

async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to Database');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectToDB;