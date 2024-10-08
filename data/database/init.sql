-- init.sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);

CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  userId UUID REFERENCES users(id),
  amount DECIMAL,
  timestamp TIMESTAMP
);
