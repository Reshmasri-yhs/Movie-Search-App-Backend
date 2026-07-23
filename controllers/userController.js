import { OAuth2Client } from "google-auth-library";
import bcrypt from "bcryptjs";
import User from "../models/User.js";


const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID
);


// Register User

export const registerUser = async(req,res)=>{
  console.log("Register Request:",req.body);
    try{

        const {
            userName,
            email,
            password
        } = req.body;


        const existingUser = await User.findOne({email});


        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });

        }


        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        const user = await User.create({

userName,
email,
password:hashedPassword,
provider:"local",
role:"user"

});
console.log("CREATED USER:",user);

        res.status(201).json({

            message:"Registration successful",

            user

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



// Login User

export const loginUser = async(req,res)=>{
 console.log("Login Request:",req.body);
    try{

        const {
            email,
            password
        } = req.body;


        const user = await User.findOne({email});


        if(!user){

            return res.status(404).json({
                message:"User not found"
            });

        }


        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        if(!isMatch){

            return res.status(401).json({
                message:"Invalid password"
            });

        }


        res.status(200).json({

            message:"Login successful",

            user

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



// Google Login

export const googleLogin = async(req,res)=>{

    try{

        const {token}=req.body;


        const ticket = await client.verifyIdToken({

            idToken:token,

            audience:process.env.GOOGLE_CLIENT_ID

        });


        const payload = ticket.getPayload();


        const {
            name,
            email,
            picture,
            sub
        } = payload;


        let user = await User.findOne({email});


        if(!user){

            user = await User.create({

                userName:name,

                email,

                googleId:sub,

                profileImage:picture,

                provider:"google"

            });

        }


        res.status(200).json({

            message:"Google Login Successful",

            user

        });


    }
    catch(error){

        console.log(error);

        res.status(500).json({

            message:"Google authentication failed"

        });

    }

};