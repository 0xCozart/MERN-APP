import routes from './routes';
import app from './app';
import dbConnector from './db/connector';
import { PATH, MONGO_URI } from './config/index';

dbConnector(MONGO_URI);
routes({ app });
