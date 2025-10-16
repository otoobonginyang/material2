import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entiy/entity';  // make sure this path is correct
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),

    // ✅ ConfigModule to read from .env
    ConfigModule.forRoot(),

    // ✅ Passport setup
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),

    // ✅ Async JWT setup (uses .env JWT_SECRET)
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule, PassportModule], // ✅ export if used in other modules
})
export class AuthModule {}
