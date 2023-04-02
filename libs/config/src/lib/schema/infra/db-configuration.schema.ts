import * as Joi from 'joi';

export type DatabaseConfigurationSchema = {
  DATABASE_URL: string;
  DB_TYPE: string
  DB_HOST: string
  DB_NAME: string
  DB_USER: string
  DB_PORT: string
  DB_PASS: string
};

export const databaseConfigurationValidationObject: Record<
  keyof DatabaseConfigurationSchema,
  Joi.Schema
> = {
  DATABASE_URL: Joi.string().required(),
  DB_TYPE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  DB_PASS: Joi.string().required(),
};
