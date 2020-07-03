"use strict";
exports.__esModule = true;
// import { PATH, MONGO_URI } from './config/index';
var dotenv = require("dotenv");
console.log(dotenv.config({ path: __dirname + '/../../.env' }));
// const { MONGO_URI } = process.env['MONGO_URI']
// dbConnector(MONGO_URI);
// routes({ app });
