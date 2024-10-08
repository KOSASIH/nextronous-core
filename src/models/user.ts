// user.ts
import { Model } from 'sequelize';

class User extends Model {
  id: number;
  name: string;
  email: string;
}

export default User;
