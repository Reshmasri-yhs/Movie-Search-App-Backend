import mongoose from "mongoose";

const favoriteSchema=new mongoose.Schema({

userId:{
type:String,
required:true
},

movieId:{
type:String,
required:true
},

title:String,

poster:String,

rating:String,

year:String

},{
timestamps:true
});


export default mongoose.model(
"Favorite",
favoriteSchema
);