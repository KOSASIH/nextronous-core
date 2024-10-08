// user-controller.ts
import { Router } from 'express';
import { UserService } from '../services/user-service';

const router = Router();
const userService = new UserService();

router.get('/', async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

router.post('/', async (req, res) => {
  const user = await userService.createUser(req.body);
  res.json(user);
});

export default router;
