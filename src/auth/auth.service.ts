import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';



@Injectable()
export class AuthService {
 constructor(@InjectRepository (UserEntity)
 private UserRepository: Repository<UserEntity>,
 private jwtService: JwtService){}


    //Signup
  async signup(signupDto : SignUpDto) {
  signupDto.email = signupDto.email.toLowerCase();
  const {email, password,...rest}=signupDto
 
  // check if user already exists
  const existingUser = await this.UserRepository.findOne({where: {email: signupDto.email }});
  if (existingUser) throw new HttpException ('User already exists', 404);

   //Hash passsword
   const hashedpassword = await bcrypt.hash(signupDto.password, 10);

   //Create new User
   const newUser = await this.UserRepository.save({
     email: signupDto.email,
     password: hashedpassword,
     ...rest
   });

   const userpayload = {id: newUser.id, username: newUser.username, email: newUser.email,
     password: newUser.password, phonenumber: newUser.phonenumber,
     DOB: newUser.DOB,  gender: newUser.gender, city: newUser.city}
     
     return{
      userid: newUser.id, email: newUser.email, password: newUser.password, ...rest,
      token: this.jwtService.sign(userpayload),
      message: 'User Created Successfully'
     }
  
     //const save = await this.UserRepository.save(newUser);
  }

    
  
  //Signin
    async signin(signinDto : SignInDto) {
    signinDto.email = signinDto.email.toLowerCase();
    const { email, password } = signinDto;
  
    //Find user by email
    const user = await this.UserRepository.findOne({where: { email: email }});
    if (!user) throw new HttpException('Invalid credentials', 404);

    //Find user by password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new HttpException('Invalid credentials', 404);


    //To gnerate token
     const token = await this.jwtService.signAsync({ id: user.id, email: user.email, password: user.password,})
     if(!token) throw new HttpException('Token generation failed', 404);

      return { message: 'Signin successful', user, Accessoken:token }
            
     //Remove password from response
      // const { password: any,...userData } = user.toObject();user
    //  return { message: 'Signin successful', user: userData, Accesstoken:token }
  
}


}




