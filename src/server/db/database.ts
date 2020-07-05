import Mongoose = require('mongoose');
import { MONGO_URI } from '../config';

let database: Mongoose.Connection;

export const connectDB = () => {
  if (database) return;
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
};

export const disconnectDB = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect;
};
