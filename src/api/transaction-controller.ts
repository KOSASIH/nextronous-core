// transaction-controller.ts
import { Router } from 'express';
import { TransactionService } from '../services/transaction-service';

const router = Router();
const transactionService = new TransactionService();

router.get('/', async (req, res) => {
  const transactions = await transactionService.getTransactions();
  res.json(transactions);
});

router.post('/', async (req, res) => {
  const transaction = await transactionService.createTransaction(req.body);
  res.json(transaction);
});

export default router;
