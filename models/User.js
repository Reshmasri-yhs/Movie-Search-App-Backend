import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  userName:{
    type:String,
    required:true,
    trim:true
  },

  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },

  password:{
    type:String,
    required:false
  },

  phone:{
    type:String,
    required:false
  },

  gender:{
    type:String,
    enum:["Male","Female","Other"],
    required:false
  },

  dob:{
    type:String,
    required:false
  },

  termsAccepted:{
    type:Boolean,
    default:false
  },

  googleId:{
    type:String,
    required:false
  },

  provider:{
    type:String,
    enum:["local","google"],
    default:"local"
  },
  role:{
 type:String,
 enum:["user","admin"],
 default:"user"
},
  profileImage:{
    type:String,
    default:""
  }

},{
  timestamps:true
});


export default mongoose.model("User",userSchema);