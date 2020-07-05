import Mongoose = require('mongoose');
import { MONGO_URI } from '../config';
import { UserModel } from './users/users.model';

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
  // if (UserModel) return { UserModel };
};

export const disconnectDB = () => {
  if (!database) {
    return;
  } else {
    Mongoose.disconnect;
    console.log('Disconnected from database... bye');
  }
};
