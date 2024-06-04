import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({ error: "Not authorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ error: "Not authorized - Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        console.log("Authenticated user:", req.user); // 로그 추가
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error);
        res.status(500).json({ error: error.message });
    }
}

export default protectRoute;