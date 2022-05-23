import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class addAddressDto {
  // //
  @IsNotEmpty()
  @IsString()
  house_number: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsNumber()
  zipCode: number;
}
