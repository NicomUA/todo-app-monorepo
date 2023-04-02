import * as Joi from 'joi';
export type JwtConfigurationSchema = {
  JWT_SECRET: string;
};

export const jwtConfigurationValidationObject: Record<
  keyof JwtConfigurationSchema,
  Joi.Schema
> = {
  JWT_SECRET: Joi.string().required(),
};
