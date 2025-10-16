import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

   //Sign up
  @Post('signup')
  async signup(@Body() signupDto: SignUpDto) {
    return this.authService.signup(signupDto);
  }

   //Signin
  @Post('signin')
  async signin(@Body() signinDto: SignInDto) {
    return this.authService.signin(signinDto);
  } 

   //Sign out
   @Post('signout')
   async signout (
    @Res ({passthrough:true}) res:Response){
    //res.clearCookies('jwt');
    return {message: 'Signed out successfully'};
   }

 
}
