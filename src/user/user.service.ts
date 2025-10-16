import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
constructor(@InjectRepository (UserEntity)
private readonly UserRepository : Repository<UserEntity>,){}

  
   //Find all Users
  async findAll() {
  const users = await this.UserRepository.find();
  if (!users) throw new NotFoundException ( 'users not found');
  return {users, message: 'All Users found successfully'};
  }


    //Find one user by Id
  async findOne(id:string) {
  const user = await this.UserRepository.findOne({where: {id: id} } );
  if (!user) throw new NotFoundException ('user not found');
  return { user, message: 'User found successfully'};
  }

    //Update one user by id
  async update(id: string, updateUserDto: UpdateUserDto) {
  if (updateUserDto.password) {
  updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
  }
  const user = await this.UserRepository.update(id, updateUserDto);
  if (!user) throw new NotFoundException ('User not found');
  return {message: 'User updated successfully'};
  }
     

    //Delete one user using id
   async delete(id: number) {
  const user = await this.UserRepository.delete(id);

  if (!user) throw new NotFoundException(`User not found`); 
  return {message: 'User deleted successfully'};
  }
}
