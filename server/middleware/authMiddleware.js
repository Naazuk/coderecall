module.exports = (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    req.user = req.session.user;
    next();
  };


// module.exports = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized, no token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Unauthorized, invalid token" });
//   }
// };

// require("dotenv").config(); // Ensure this is at the top of your server file
// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "No token provided." });
//   }

//   const token = authHeader.split(" ")[1]; // Extract token
//   const secret = process.env.JWT_SECRET;  // Get secret key from env

//   if (!secret) {
//     return res.status(500).json({ message: "Server error: JWT secret missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, secret);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid or expired token." });
//   }
// };

