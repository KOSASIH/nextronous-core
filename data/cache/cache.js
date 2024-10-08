// cache.js
import client from './redis';

const cache = {
  async get(key) {
    const value = await client.get(key);
    return value ? JSON.parse(value) : null;
  },

  async set(key, value) {
    await client.set(key, JSON.stringify(value));
  },

  async delete(key) {
    await client.del(key);
  },
};

export default cache;
