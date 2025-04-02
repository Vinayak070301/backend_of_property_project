const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      authSource: "admin", // Ensures authentication works correctly
      useNewUrlParser: true, // No effect, but safe to keep for now
      useUnifiedTopology: true // No effect, but safe to keep for now
    });

    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
