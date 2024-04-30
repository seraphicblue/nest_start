import { UserRole } from '../entities/user.entity';

export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole;
};
