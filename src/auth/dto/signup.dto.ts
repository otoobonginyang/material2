import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class SignUpDto {
  
  @IsNotEmpty()
  username: string;

  @IsEmail({}, { message: 'Email must be valid' })
  // @Matches(
  //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  //   { message: 'Please provide a valid email address' }
  // )
  //  @Matches(
  //  /^(?!.\.com\.com).$/,
  //   { message: 'Email cannot contain multiple .com' }
  //  )
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phonenumber: number;

  @IsNotEmpty()
  DOB: string;

  @IsNotEmpty()
  gender:string

  @IsNotEmpty()
  city: string;

}