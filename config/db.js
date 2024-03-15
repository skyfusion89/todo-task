const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_CONNECTION, {});

  console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}`);
  return conn.connection;
};

module.exports = connectDB;
