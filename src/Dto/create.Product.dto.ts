import { IsNotEmpty, IsString } from 'class-validator';

export class addProductDto {
  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsNotEmpty()
  // @IsNumber()
  productPrice: number;
}
