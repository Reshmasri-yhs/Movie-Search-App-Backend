import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"Movie title is required"],
        trim:true,
        minlength:[2,"Title must have minimum 2 characters"]
    },

    year:{
        type:Number,
        required:true,
        min:[1900,"Invalid release year"],
        max:[2030,"Invalid future year"]
    },

    genre:{
        type:String,
        required:true,
        enum:[
            "Action",
            "Sci-Fi",
            "Romance",
            "Comedy",
            "Horror",
            "Animation"
        ]
    },

    rating:{
        type:Number,
        min:0,
        max:10,
        default:0
    },

    language:{
        type:String,
        default:"English"
    },

    poster:{
        type:String,
        default:"no-poster.jpg"
    }

},
{
    timestamps:true
});


const Movie = mongoose.model("Movie",movieSchema);

export default Movie;
