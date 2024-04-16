const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Secret key for JWT token
const secretKey = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Middleware to verify JWT token and extract user data
  authMiddleware: async function (req, res, next) {
    try {
      // Check if token is sent via query string or headers
      let token = req.query.token || req.headers.authorization;

      // Check if token exists
      if (!token) {
        return res.status(400).json({ message: 'You have no token!' });
      }

      // Remove 'Bearer ' from token string if present
      if (token.startsWith('Bearer ')) {
        token = token.slice(7);
      }

      // Verify the token and extract user data
      const decoded = jwt.verify(token, secretKey);
      const user = await User.findById(decoded._id);

      // If user doesn't exist, token is invalid
      if (!user) {
        return res.status(401).json({ message: 'Invalid token!' });
      }

      // Attach user data to the request object
      req.user = user;

      // Continue to the next middleware
      next();
    } catch (error) {
      console.error('JWT verification failed:', error.message);
      return res.status(401).json({ message: 'Invalid token!' });
    }
  },

  // Function to sign JWT token
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign(payload, secretKey, { expiresIn: expiration });
  },
};
