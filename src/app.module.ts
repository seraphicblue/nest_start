import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { AccessToken } from 'auth/entities/access-token.entity';
import { RefreshToken } from 'auth/entities/refresh-token.entity';
import { AccessLog } from 'auth/entities/access-log.entity';
import { TokenBlacklist } from 'auth/entities/token-blacklist.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'user',
        password: 'password',
        database: 'devcamp',
        entities: [User, AccessToken, RefreshToken, AccessLog, TokenBlacklist],
        synchronize: true,
      }),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
