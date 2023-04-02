import * as Joi from 'joi';
import {
  JwtConfigurationSchema,
  jwtConfigurationValidationObject,
} from './jwt-configuration.schema';
import {
  ApplicativeUrlsConfigurationSchema,
  applicativeUrlsConfigurationValidationObject,
} from './urls.configuration.schema';

export type ApplicativeConfigurationSchema =
  ApplicativeUrlsConfigurationSchema &
  JwtConfigurationSchema

export const applicativeConfigurationValidationObject: Record<
  keyof ApplicativeConfigurationSchema,
  Joi.Schema
> = {
  ...applicativeUrlsConfigurationValidationObject,
  ...jwtConfigurationValidationObject,
};
