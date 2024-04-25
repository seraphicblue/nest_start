import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class AuthModule {}
