// api.ts
import { API } from '@nextronous/core/api';
import { Environment } from './environment';
import { database } from './database';

const apiHost = Environment.API_HOST;
const apiPort = Environment.API_PORT;
const apiKey = Environment.API_KEY;

export const api = new API({
  host: apiHost,
  port: apiPort,
  key: apiKey,
  routes: [
    {
      method: 'GET',
      path: '/users',
      handler: async () => {
        const users = await database.query(`SELECT * FROM users`);
        return users.rows;
      },
    },
    {
      method: 'POST',
      path: '/transactions',
      handler: async
