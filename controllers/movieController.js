import Movie from "../models/Movie.js";
import mongoose from "mongoose";

export const getMovies = async(req,res)=>{
    try{

        const movies = await Movie.find();

        res.status(200).json({
            success:true,
            count:movies.length,
            movies
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};

export const getMovieById = async(req,res)=>{
    try{

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({
                success:false,
                message:"Invalid Movie ID"
            });
        }

        const movie = await Movie.findById(req.params.id);

        if(!movie){
            return res.status(404).json({
                success:false,
                message:"Movie not found"
            });
        }

        res.status(200).json({
            success:true,
            movie
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};


export const addMovie = async (req,res)=>{
    try{

        const movie = await Movie.create(req.body);

        res.status(201).json({
            success:true,
            movie
        });

    }
    catch(error){

        res.status(400).json({
            success:false,
            message:error.message
        });

    }
};


export const updateMovie = async(req,res)=>{
    console.log("ID received:", req.params.id);

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({
            success:false,
            message:"Invalid Movie ID"
        });
    }

    try{

        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        );

        if(!movie){
            return res.status(404).json({
                success:false,
                message:"Movie not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"Movie updated successfully",
            movie
        });

    }
    catch(error){

        res.status(400).json({
            success:false,
            message:error.message
        });

    }
};


export const deleteMovie = async(req,res)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({
            success:false,
            message:"Invalid Movie ID"
        });
    }

    try{

        const movie = await Movie.findByIdAndDelete(req.params.id);

        if(!movie){
            return res.status(404).json({
                success:false,
                message:"Movie not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"Movie deleted successfully"
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
