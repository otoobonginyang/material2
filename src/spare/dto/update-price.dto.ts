import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdatePriceDto {
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
