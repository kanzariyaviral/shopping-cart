/* eslint-disable @typescript-eslint/naming-convention */
import * as Joi from 'joi';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  // useSSL: process.env.USE_SSL.toLowerCase() === 'true' ? true : false,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DATABASE_PORT, 5432) || 5432,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA,
    sqlLogs: process.env.SQL_LOG.toLowerCase() === 'true' ? true : false,
  },
});

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number(),
  DB_DATABASE: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  SQL_LOG: Joi.string().required(),
});
