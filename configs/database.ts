// database.ts
import { Database } from '@nextronous/core/database';
import { Environment } from './environment';

const databaseUrl = Environment.DATABASE_URL;
const databaseUsername = Environment.DATABASE_USERNAME;
const databasePassword = Environment.DATABASE_PASSWORD;

export const database = new Database({
  url: databaseUrl,
  username: databaseUsername,
  password: databasePassword,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
  logging: Environment.LOG_LEVEL === 'DEBUG' ? console.log : false,
});

// Database schema
export const schema = {
  users: {
    id: {
      type: 'uuid',
      primaryKey: true,
    },
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      unique: true,
    },
  },
  transactions: {
    id: {
      type: 'uuid',
      primaryKey: true,
    },
    userId: {
      type: 'uuid',
      references: {
        model: 'users',
        key: 'id',
      },
    },
    amount: {
      type: 'decimal',
    },
    timestamp: {
      type: 'timestamp',
    },
  },
};

// Database migrations
export const migrations = [
  {
    version: 1,
    up: async () => {
      await database.query(`CREATE TABLE users (id UUID PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE)`);
      await database.query(`CREATE TABLE transactions (id UUID PRIMARY KEY, userId UUID REFERENCES users(id), amount DECIMAL, timestamp TIMESTAMP)`);
    },
    down: async () => {
      await database.query(`DROP TABLE transactions`);
      await database.query(`DROP TABLE users`);
    },
  },
];
