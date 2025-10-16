import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
   imports: [TypeOrmModule.forFeature([UserEntity]),
   JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '1h'},
    
   }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
