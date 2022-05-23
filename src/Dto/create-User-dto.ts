import {
  IsEmail,
  IsString,
  IsEnum,
  MinLength,
  Matches,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';
import { Match } from './match.decorator';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z]*$/, { message: 'please enter valid user name' })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/, {
    message: 'password too weak',
  })
  password: string;

  @IsNotEmpty()
  @Match('password')
  passwordConfirm: string;

  @IsNotEmpty()
  @IsEnum(['male', 'female'])
  gender: string;
}
