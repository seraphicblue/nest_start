import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { AccessToken } from './auth/entities/access-token.entity';
import { RefreshToken } from './auth/entities/refresh-token.entity';
import { AccessLog } from './auth/entities/access-log.entity';
import { TokenBlacklist } from './auth/entities/token-blacklist.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validationSchema } from 'config/validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'user'),
        password: configService.get('DB_PASSWORD', 'password'),
        database: configService.get('DB_DATABASE', 'devcamp'),
        entities: [User, AccessToken, RefreshToken, AccessLog, TokenBlacklist],
        synchronize: configService.get('DB_SYNCHRONIZE', true),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
