import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './services/user.service';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [MoviesController, AuthController],
  providers: [AuthService, UserService],
})
export class AppModule {}
