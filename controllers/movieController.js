import Movie from "../models/Movie.js";

function getMovies(req,res){
    Movie.find()
    .then(function(movies){
        res.status(200).json(movies);
    })
    .catch(function(error){
        res.status(500).json({message:error.message});
    });
}


function getMovieById(req,res){
    Movie.findById(req.params.id)
    .then(function(movie){

        if(!movie){
            return res.status(404).json({
                message:"Movie not found"
            });
        }

        res.status(200).json(movie);
    })
    .catch(function(error){
        res.status(500).json({
            message:error.message
        });
    });
}


function addMovie(req,res){

    const movie = new Movie({
        title:req.body.title,
        year:req.body.year,
        genre:req.body.genre,
        rating:req.body.rating,
        language:req.body.language,
        poster:req.body.poster
    });


    movie.save()
    .then(function(newMovie){
        res.status(201).json(newMovie);
    })
    .catch(function(error){
        res.status(400).json({
            message:error.message
        });
    });

}


function updateMovie(req,res){

    Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    .then(function(movie){

        if(!movie){
            return res.status(404).json({
                message:"Movie not found"
            });
        }

        res.status(200).json(movie);

    })
    .catch(function(error){
        res.status(400).json({
            message:error.message
        });
    });

}


function deleteMovie(req,res){

    Movie.findByIdAndDelete(req.params.id)
    .then(function(movie){

        if(!movie){
            return res.status(404).json({
                message:"Movie not found"
            });
        }

        res.status(200).json({
            message:"Movie deleted successfully"
        });

    })
    .catch(function(error){
        res.status(500).json({
            message:error.message
        });
    });

}


export {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
};