function adminOnly(req,res,next){

const user=req.headers.user;


if(!user){

return res.status(401).json({
message:"Login required"
});

}


const loggedUser=JSON.parse(user);


if(loggedUser.role!=="admin"){

return res.status(403).json({
message:"Only admin can perform this action"
});

}


next();

}


export default adminOnly;