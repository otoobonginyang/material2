import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';
import { SpareModule } from './spare/spare.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entiy/entity';
import { Materialentity } from './material/entities/material.entity';
import { Spareentity } from './spare/entities/spare.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';



@Module({
  imports: [DatabaseModule ,UserModule,AuthModule, MaterialModule, SpareModule,AuthModule],
})
export class AppModule {}
  