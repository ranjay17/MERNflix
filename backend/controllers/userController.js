import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async(req, res)=>{
    try {
        const{fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message: "All fields are required",
                success: false,
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message: "User already registered",
                success: false,
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 10);

        await User.create({
            fullName,
            email,
            password: hashedPassword,
        })
        return res.status(200).json({
            message: "User registered successfully",
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
}

export const Login = async(req,res) =>{
    try {
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message: "All fields are required",
                success: false,
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message: "User not registered",
                success: false,
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message: "Password is not correct",
                success: false,
            })
        }
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          process.env.SECRET_KEY,
          { expiresIn: "1d" }
        );
        return res.status(200).json({
          message: "Login successful",
          success: true,
          token: token,
          user: {
            fullName: user.fullName,
            email: user.email,
            _id: user._id,
          },
        });
    } catch (error) {
        console.log(error)
    }
}

export const Logout = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Logout successful",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error during logout",
      success: false,
    });
  }
};