const express = require('express');
const {
  addProperty,
  updateProperty,
  deleteProperty,
  getAllProperties,
  getFeaturedProperties
} = require('../controller/propertyController');

const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ Public Routes (Anyone can access)
router.get('/home', getAllProperties);
router.get('/featured', getFeaturedProperties);

// ✅ Admin-Only Routes (Requires Auth + Admin Role)
router.post('/add', authMiddleware, adminMiddleware, addProperty);
router.put('/update/:id', authMiddleware, adminMiddleware, updateProperty);
router.delete('/delete/:id', authMiddleware, adminMiddleware, deleteProperty);

module.exports = router;
