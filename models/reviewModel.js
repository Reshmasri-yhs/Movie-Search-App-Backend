import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({

movieId:{
type:String,
required:true
},

userId:{
type:String,
required:true
},

username:{
type:String,
required:true
},

rating:{
type:Number,
required:true,
min:1,
max:10
},

comment:{
type:String,
required:true
}

},{
timestamps:true
});

export default mongoose.model("Review",reviewSchema);