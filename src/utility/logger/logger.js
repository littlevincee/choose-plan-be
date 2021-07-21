import { createLogger, format, transports } from 'winston';

const options = {
  file: {
    level: 'info',
    filename: './src/logs/combined.log',
    json: true,
    maxsize: 10240,
    maxFiles: 10,
    colorize: true
  },
  error: {
    level: 'error',
    filename: './src/logs/error.log',
    json: true,
    maxsize: 10240,
    maxFiles: 10
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: true
  }
};

const myFormat = format.printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`);

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    myFormat
  ),
  transports: [
    new transports.File(options.error),
    new transports.File(options.file)
  ]
});

const morganOption = {
  stream: {
    write(message) {
      logger.info(message.trim());
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  logger.add(new transports.Console(options.console));
}

export { logger, morganOption };