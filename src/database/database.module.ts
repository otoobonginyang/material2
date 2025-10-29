import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Materialentity } from 'src/material/entities/material.entity';
import { Spareentity } from 'src/spare/entities/spare.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [
    // Make config available in this module
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Configure TypeORM asynchronously using ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [UserEntity, Materialentity, Spareentity],
        ssl: { rejectUnauthorized: false }, // needed if you’re using Aiven
        synchronize: true, // disable in production
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
