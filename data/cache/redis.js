// redis.js
import { createClient } from 'redis';

const client = createClient({
  host: 'localhost',
  port: 6379,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

export default client;
