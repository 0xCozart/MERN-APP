import * as mongoose from 'mongoose';
import { TInput } from '../@types/index';

const dbConnector = (db: string): mongoose.Connection => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  return mongoose.connection.on('disconnected', connect);
};

export default dbConnector;
