-- 002_create_transactions_table.sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  userId UUID REFERENCES users(id),
  amount DECIMAL,
  timestamp TIMESTAMP
);
