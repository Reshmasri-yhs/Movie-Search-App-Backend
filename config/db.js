import mongoose from "mongoose";


function connectDB(){

    mongoose.connect(process.env.MONGO_URI)

    .then(function(){
        console.log("MongoDB Connected Successfully");

    })
    .catch(function(error){
        console.log("MongoDB Connection Failed");
        console.log(error.message);

    });

}
export default connectDB;