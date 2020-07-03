import routes from './routes';
import app from './app';
import dbConnector from './db/connector';
// import { PATH, MONGO_URI } from './config/index';
import * as dotenv from 'dotenv';
import { rawListeners } from 'process';

console.log(dotenv.config({ path: __dirname + '/../../.env' }));

// const { MONGO_URI } = process.env['MONGO_URI']

// dbConnector(MONGO_URI);
// routes({ app });
