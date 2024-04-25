import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import * as argon2 from 'argon2';
import { CreateUserDto } from '../dto/CreateUserDto';
import { User } from '../entities/User';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userRepo: UserRepository) {}  
  async createUser(dto: CreateUserDto): Promise<User> {

    const user = await this.userRepo.findOneByEmail(dto.email);
  
    const hashedPassword = await argon2.hash(dto.password);
    return this.userRepo.createUser(dto, hashedPassword);
  }
}
