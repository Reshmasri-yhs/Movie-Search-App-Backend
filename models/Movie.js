import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:10
    },
    language:{
        type:String
    },
    poster:{
        type:String
    }
});

const Movie = mongoose.model("Movie",movieSchema);

export default Movie;