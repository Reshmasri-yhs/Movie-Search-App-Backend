import Review from "../models/reviewModel.js";

export const addReview=async(req,res)=>{
try{

const review=await Review.create(req.body);

res.status(201).json({
success:true,
review
});

}catch(err){

res.status(500).json({
success:false,
message:err.message
});

}
};

export const getReviews=async(req,res)=>{
try{

const reviews=await Review.find({
movieId:req.params.movieId
}).sort({createdAt:-1});

res.json({
success:true,
reviews
});

}catch(err){

res.status(500).json({
success:false,
message:err.message
});

}
};

export const updateReview=async(req,res)=>{
try{

const review=await Review.findById(req.params.id);

if(!review)
return res.status(404).json({message:"Review not found"});

if(review.userId!==req.body.userId)
return res.status(403).json({message:"Not allowed"});

review.rating=req.body.rating;
review.comment=req.body.comment;

await review.save();

res.json({
success:true,
review
});

}catch(err){

res.status(500).json({
success:false,
message:err.message
});

}
};

export const deleteReview=async(req,res)=>{
try{

const review=await Review.findById(req.params.id);

if(!review)
return res.status(404).json({message:"Review not found"});

if(review.userId!==req.body.userId)
return res.status(403).json({message:"Not allowed"});

await review.deleteOne();

res.json({
success:true,
message:"Review deleted"
});

}catch(err){

res.status(500).json({
success:false,
message:err.message
});

}
};