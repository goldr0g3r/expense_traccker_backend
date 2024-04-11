import {
  IsInt,
  IsNotEmpty,
  IsUrl,
  Max,
  Min,
  validateSync,
} from 'class-validator';
import { IEnvironment } from './common/interfaces/environment';
import { Expose, plainToClass } from 'class-transformer';
import { registerAs } from '@nestjs/config';

export class Environment implements IEnvironment {
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(65535)
  @Expose({ name: 'PORT' })
  port: number;

  @IsNotEmpty()
  @Expose({ name: 'MONGODB_URI' })
  mongodb_uri: string;

  @IsNotEmpty()
  @Expose({ name: 'MONGODB_USERS_DATABASE' })
  usersDB: string;

  @IsNotEmpty()
  @Expose({ name: 'COOKIE_SECRET' })
  cookie_secret: string;

  @IsNotEmpty()
  @Expose({ name: 'COOKIE_EXPIRY' })
  cookie_expiry: number;
}

export const Config = 'config';
export const registerConfig = registerAs(Config, (): Environment => {
  const envClass = plainToClass(Environment, process.env, {
    enableImplicitConversion: true,
    excludeExtraneousValues: true,
    exposeDefaultValues: true,
    exposeUnsetFields: true,
  });
  const errors = validateSync(envClass, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) throw new Error(errors.toString());

  return envClass;
});
