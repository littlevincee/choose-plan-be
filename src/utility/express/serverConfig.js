import express from 'express';
import cors from 'cors';
import swaggerUI from "swagger-ui-express";
import { logger } from '../logger/logger';
import Routes from '../../routes';
import SwaggerSpecs from "../../utility/swagger/swagger";

const serverConfig = async (app) => {
  const corsOptions = {
    origin: ["http://localhost:3000"]
    }
  app.use(cors(corsOptions));

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use("/docs", swaggerUI.serve, swaggerUI.setup(SwaggerSpecs));

  app.use((err, req, res, next) => {
    logger.error(`Internal Server Error from req: ${req}`);
    logger.error(`Internal Server Error msg: ${err}`);
    res.status(500).send('500. Internal Server Error');
    next();
  });

  Routes(app);
};

export default serverConfig;