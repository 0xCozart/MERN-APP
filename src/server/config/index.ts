import * as dotenv from 'dotenv';

dotenv.config();

let path: string;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../../envs/.env`;
    break;
  case 'development':
    path = `${__dirname}/../../../envs/development.env`;
    break;
  case 'production':
    path = `${__dirname}/../../../envs/production.env`;
    break;
  default:
    path = `${__dirname}/../../../envs/development.env`;
}

dotenv.config({ path: path });

const MONGO_URI = process.env['MONGO_URI'] ? process.env['MONGO_URI'] : 'Err';
const PATH = process.env['PORT'] ? process.env['PORT'] : 'Err';

export { PATH, MONGO_URI };
