import * as dotenv from 'dotenv';

dotenv.config();

let path: string;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../../envs/test.env`;
    break;
  case 'development':
    path = `${__dirname}/../../../envs/.env.development`;
    break;
  case 'production':
    path = `${__dirname}/../../../envs/.env.production`;
    break;
  default:
    path = `${__dirname}/../../../envs/.env.development`;
}

dotenv.config({ path: path });

const MONGO_URI = process.env['MONGO_URI'] ? process.env['MONGO_URI'] : 'Err';
const PORT = process.env['PORT'] ? process.env['PORT'] : 'Err';

export { PORT, MONGO_URI };
