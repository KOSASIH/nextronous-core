// environment.ts
import { Env } from '@nextronous/core/utils/env';

const env = new Env();

// Universe-wide constants
export const UNIVERSE_VERSION = '1.0.0-alpha';
export const GALACTIC_TIMEZONE = 'Galactic Standard Time';

// Environment variables
export const ENVIRONMENT = env.getString('ENVIRONMENT', 'development');
export const DEBUG_MODE = env.getBoolean('DEBUG_MODE', false);
export const LOG_LEVEL = env.getString('LOG_LEVEL', 'INFO');

// Security settings
export const ENCRYPTION_KEY = env.getString('ENCRYPTION_KEY', 'nextronous_secret_key');
export const AUTH_TOKEN_EXPIRATION = env.getInteger('AUTH_TOKEN_EXPIRATION', 3600);

// Interstellar communication settings
export const COMMUNICATION_PROTOCOL = env.getString('COMMUNICATION_PROTOCOL', 'NextronousProtocolV2');
export const COMMUNICATION_PORT = env.getInteger('COMMUNICATION_PORT', 8080);

// Database connection settings
export const DATABASE_URL = env.getString('DATABASE_URL', 'nextronous-db://localhost:5432');
export const DATABASE_USERNAME = env.getString('DATABASE_USERNAME', 'nextronous_admin');
export const DATABASE_PASSWORD = env.getString('DATABASE_PASSWORD', 'nextronous_password');

// API settings
export const API_HOST = env.getString('API_HOST', 'https://api.nextronous.com');
export const API_PORT = env.getInteger('API_PORT', 443);
export const API_KEY = env.getString('API_KEY', 'nextronous_api_key');

// Other settings
export const CACHE_TTL = env.getInteger('CACHE_TTL', 3600);
export const RATE_LIMITER_MAX_REQUESTS = env.getInteger('RATE_LIMITER_MAX_REQUESTS', 100);
export const RATE_LIMITER_TIME_WINDOW = env.getInteger('RATE_LIMITER_TIME_WINDOW', 60);

export default {
  ENVIRONMENT,
  DEBUG_MODE,
  LOG_LEVEL,
  ENCRYPTION_KEY,
  AUTH_TOKEN_EXPIRATION,
  COMMUNICATION_PROTOCOL,
  COMMUNICATION_PORT,
  DATABASE_URL,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  API_HOST,
  API_PORT,
  API_KEY,
  CACHE_TTL,
  RATE_LIMITER_MAX_REQUESTS,
  RATE_LIMITER_TIME_WINDOW,
};
