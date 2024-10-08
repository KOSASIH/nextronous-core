// index.ts
import { Router } from 'express';
import { UserController } from './user-controller';
import { TransactionController } from './transaction-controller';

const router = Router();

router.use('/users', UserController);
router.use('/transactions', TransactionController);

export default router;
