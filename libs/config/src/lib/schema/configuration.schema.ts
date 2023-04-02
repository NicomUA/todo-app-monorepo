import * as Joi from 'joi';
import {
  ApplicativeConfigurationSchema,
  applicativeConfigurationValidationObject,
} from './applicative';
import {
  InfrastructureConfigurationSchema,
  infrastructureConfigurationValidationObject,
} from './infra';

export type ConfigurationSchema = ApplicativeConfigurationSchema &
  InfrastructureConfigurationSchema & {
    PORT?: number;
    // Others
  };

export const validationObject: Record<keyof ConfigurationSchema, Joi.Schema> = {
  ...applicativeConfigurationValidationObject,
  ...infrastructureConfigurationValidationObject,
  PORT: Joi.string(),
};

export const configurationSchema =
  Joi.object<ConfigurationSchema>(validationObject);
