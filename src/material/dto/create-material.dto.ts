import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateMaterialDto {

@IsNotEmpty()
@IsString()
type: string;

@IsNotEmpty()
@IsNumber()
quantity: number;

  @IsString()
  @IsNotEmpty()
  color: string;


@IsNotEmpty()
@IsNumber()
price: number;


@IsNotEmpty()
@IsString()
delivery: string;


@IsNotEmpty()
@IsString()
payment: string;


@IsDateString()
@IsNotEmpty()
date: string;

}