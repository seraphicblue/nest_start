import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../repository';
import * as argon2 from 'argon2';
import { CreateUserDto } from '../dto/CreateUserDto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userRepo: UserRepository) {}
  async createUser(dto: CreateUserDto): Promise<User | null> {
    const user = await this.userRepo.findOneByEmail(dto.email);
    if (user) {
      this.logger.error(`${dto.email} already exists`);
      return null; // 에러 상황을 나타내는 null 반환
    }
    const hashedPassword = await argon2.hash(dto.password);
    return this.userRepo.createUser(dto, hashedPassword);
  }
}
