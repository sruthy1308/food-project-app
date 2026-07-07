const jwt = require("jsonwebtoken");
const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

// Check if user is authenticated
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { jwt: token } = req.cookies || {};

  // Also check Authorization header (for Postman testing)
  let authToken = token;
  if (!authToken && req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    authToken = req.headers.authorization.split(" ")[1];
  }

  if (!authToken) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }

  const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  if (!req.user) {
    return next(new ErrorHandler("User not found", 401));
  }

  next();
});
