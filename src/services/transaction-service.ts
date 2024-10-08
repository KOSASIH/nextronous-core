// transaction-service.ts
import { TransactionService } from './transaction-service';
import { Transaction } from '../models/transaction';

class TransactionService {
  async getTransactions() {
    // Get transactions from database
  }

  async createTransaction(transaction: Transaction) {
    // Create transaction in database
  }
}

export default TransactionService;
