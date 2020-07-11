import Mongoose = require('mongoose');
import { MONGO_URI } from '../config';

let database: Mongoose.Connection;

const connectDB = () => {
  // Checls if connection open
  if (database) return database;

  Mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  database = Mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database...');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });

  return database;
};

export default connectDB;
