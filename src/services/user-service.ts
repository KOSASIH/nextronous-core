// user-service.ts
import { UserService } from './user-service';
import { User } from '../models/user';

class UserService {
  async getUsers() {
    // Get users from database
  }

  async createUser(user: User) {
    // Create user in database
  }
}

export default UserService;
