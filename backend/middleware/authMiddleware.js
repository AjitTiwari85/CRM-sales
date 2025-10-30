import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Verify Token and Attach User Info
export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    // Decode JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from DB to get role info
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ message: "User not found" });

    // Attach to request
    req.user = user;
    req.userRole = user.role; //Add role here so authorizeRoles can use it

    next();
  } catch (err) {
    console.error("Auth Error:", err);
    res.status(401).json({ message: "Invalid token" });
  }
};