import Favorite from "../models/Favorite.js";


export const getFavorites=async(req,res)=>{

try{

const favorites=await Favorite.find({
userId:req.params.userId
});

res.json(favorites);

}catch(err){

res.status(500).json({
message:err.message
});

}

};



export const addFavorite=async(req,res)=>{

try{

const exists=await Favorite.findOne({

userId:req.body.userId,

movieId:req.body.movieId

});


if(exists){

return res.json({
message:"Already added"
});

}


const favorite=await Favorite.create(req.body);

res.status(201).json(favorite);


}catch(err){

res.status(500).json({
message:err.message
});

}

};



export const removeFavorite=async(req,res)=>{

try{

await Favorite.findOneAndDelete({

userId:req.body.userId,

movieId:req.body.movieId

});


res.json({
message:"Removed"
});


}catch(err){

res.status(500).json({
message:err.message
});

}

};