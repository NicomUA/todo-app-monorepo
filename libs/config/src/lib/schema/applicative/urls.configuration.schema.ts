import * as Joi from 'joi';

export type ApplicativeUrlsConfigurationSchema = {
  API_HOST: string;
};

export const applicativeUrlsConfigurationValidationObject: Record<
  keyof ApplicativeUrlsConfigurationSchema,
  Joi.Schema
> = {
  API_HOST: Joi.string().required(),
};
