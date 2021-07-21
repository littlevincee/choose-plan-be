import regeneratorRuntime from "regenerator-runtime";
import express from 'express';
import dotenv from 'dotenv';
import serverConfig from './utility/express/serverConfig';

const app = express();

dotenv.config();

serverConfig(app);

export default app;