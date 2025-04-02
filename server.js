const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Use Merged Property & Admin Routes
const propertyRoutes = require('./route/propertyRoutes');
app.use('/', propertyRoutes);

const authRoutes = require('./route/authRoutes');
app.use('/auth', authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
