import { IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";



export class CreateSpareDto {

@IsNotEmpty()
@IsString()
type: string;

@IsNotEmpty()
@IsNumber()
size: number;

@IsNotEmpty()
@IsNumber()
quantity: number;


@IsNotEmpty()
@IsNumber()
price: number;


@IsNotEmpty()
@IsString()
delivery: string;


@IsNotEmpty()
@IsString()
payment: string;


}