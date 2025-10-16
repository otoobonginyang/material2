import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';
import { SpareModule } from './spare/spare.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entiy/entity';
import { Materialentity } from './material/entities/material.entity';
import { Spareentity } from './spare/entities/spare.entity';



@Module({
  imports: [UserModule,AuthModule, MaterialModule, SpareModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'uchena1064',
    database: 'material2',
  entities:  [ UserEntity, Materialentity, Spareentity ],
    synchronize: true,
  }),
  AuthModule
  ],
})
export class AppModule {}
  