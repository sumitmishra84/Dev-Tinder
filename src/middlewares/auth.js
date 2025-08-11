// Middleware to check for token authorization for "/admin" routes
const adminAuth= (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "xyzabcd"; // The token should be checked from the request header or other sources, not hardcoded.
  
  // Validate token
  const isTokenAdminAuthorized = token === "xyzabcd"; // Corrected comparison
  if (!isTokenAdminAuthorized) {
    return res.status(401).send("Unauthorized request"); // Send unauthorized response if token is not valid
  }
  
  next(); // Proceed to the next handler if authorized
};

module.exports={
    adminAuth,
}