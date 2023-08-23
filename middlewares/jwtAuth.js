const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
  const token = req.header('Authorization'); // Assuming the token is sent in the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
// Verify the token using the secret key
    req.user = decoded; // Add the decoded payload to the request object
    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Access denied: Invalid token' });
  }
};

module.exports = jwtAuthMiddleware;
