import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    let token;

    //req.headers.authorization: In modern web apps, the frontend sends the JWT in a header called Authorization
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            //splits the string at the space and grabs the second part (the actual token)
            const decoded  = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            //excluding the password field from the user object for security reasons
            next();
        }catch (error) {
            res.status(401).json({ message: "Not authorized, token failed" });
            next(error);
        }
    } else {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};

// Middleware to check if the user is an admin

export const admin  = (req,res,next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).json({message: "Not authorized as an admin"});
        next();
    }
};