// transaction.ts
import { Model } from 'sequelize';

class Transaction extends Model {
  id: number;
  userId: number;
  amount: number;
  timestamp: Date;
}

export default Transaction;
