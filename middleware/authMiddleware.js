const jwt = require('jsonwebtoken');
const User = require('../model/User');

exports.authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password');
    if (!req.user) return res.status(401).json({ message: 'Invalid Token' });
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};

exports.adminMiddleware = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: 'Access Denied. Admins Only.' });
  }
  next();
};
