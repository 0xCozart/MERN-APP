import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + `/../../../.env` });

const { PATH, MONGO_URI } = process.env;

export { PATH, MONGO_URI };
